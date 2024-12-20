package kr.project.linme.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import kr.project.linme.models.Payment; 

@Mapper
public interface PaymentMapper {

    /**
     * 주문/결제 데이터를 저장하기 위한 메서드 정의
     * @param input - 주문/결제 데이터
     * @return
     */
    @Insert(
            "INSERT INTO payment (" + 
                "member_id, " +
                "order_no, " +
                "order_name, " + 
                "order_tel, " + 
                "addr1, " + 
                "addr2, " +
                "nickname, " + 
                "addr_msg, " + 
                "discount_price, " +
                "total_price, " + 
                
                "reg_date, " + 
                "edit_date" + 
            ") " +
            "VALUES (" + 
                "#{memberId}, " +
                // 주문 번호
                // ex : 20241213-14420001
                "(SELECT CONCAT(DATE_FORMAT(NOW(), '%Y%m%d-%H%i'), LPAD(IFNULL(SUBSTRING(MAX(order_no), 14), 0) + 1, 4, '0')) FROM payment AS p), " + 
                "#{orderName}, " + 
                "#{orderTel}, " + 
                "#{addr1}, " +
                "#{addr2}, " + 
                "#{nickname}, " + 
                "#{addrMsg}, " + 
                "#{discountPrice}, " +
                "#{totalPrice}, " + 
                "NOW(), " + 
                "NOW()" + 
            ")")
    @Options(useGeneratedKeys = true, keyProperty = "paymentId", keyColumn = "payment_id")
    public int insert(Payment input);

    /**
     * 주문/결제 데이터를 수정하기 위한 메서드 정의
     * @param input
     * @return
     */
    @Update("UPDATE payment SET " +
                "member_id = #{memberId}, " +
                "order_no = #{orderNo}, " +
                "order_name = #{orderName}, " + 
                "order_tel = #{orderTel}, "+
                "addr1 = #{addr1}, " + 
                "addr2 = #{addr2}, " + 
                "nickname = #{nickname},"+ 
                "addr_msg = #{addrMsg}, " + 
                // "discount_price = #{discountPrice}, "+
                "total_price = #{totalPrice}, " + 
                "edit_date = NOW() " +
            "WHERE payment_id = #{paymentId}")
    public int update(Payment input);

    @Delete("DELETE FROM payment WHERE payment_id = #{paymentId}")
    public int delete(Payment input);

    /**
     * 단일행 조회를 수행하는 메서드 정의
     * @param input
     * @return
     */
    @Select("SELECT " +
                "payment_id, " +
                "member_id, " +
                "order_no, " +
                "order_name, " + 
                "order_tel, " + 
                "addr1, " + 
                "addr2, "+
                "nickname, " + 
                "addr_msg, " + 
                "discount_price, " + 
                "total_price, " + 
                "reg_date, " + 
                "edit_date " +
            "FROM payment " + 
            "WHERE payment_id = #{paymentId}")
    @Results(id="PaymentMap", value={
        @Result(property = "paymentId", column = "payment_id"),
        @Result(property = "memberId", column = "member_id"),
        @Result(property = "orderNo", column = "order_no"),
        @Result(property = "orderName", column = "order_name"),
        @Result(property = "orderTel", column = "order_tel"),
        @Result(property = "addr1", column = "addr1"),
        @Result(property = "addr2", column = "addr2"),
        @Result(property = "nickname", column = "nickname"),
        @Result(property = "addrMsg", column = "addr_msg"),
        @Result(property = "discountPrice", column = "discount_price"),
        @Result(property = "totalPrice", column = "total_price"),
        @Result(property = "regDate", column = "reg_date"),
        @Result(property = "editDate", column = "edit_date")
    })
    public Payment selectItem(Payment input);

    /**
     *  주문 완료 후 주문서 확인을 위한 리스트 조회
     * @param input
     * @return
     */
    @Select("SELECT "+
                "p.payment_id, " +
                "p.member_id, " + 
                "p.order_no, " +
                "p.order_name, " + 
                "p.total_price, " + 
                "o.order_bname, " +
                "o.order_pname, " +
                "o.order_count, " +
                "o.order_sprice, " +
                "o.order_img, " + 
                "p.reg_date, " +
                "p.edit_date " +
            "FROM payment p " +
            "INNER JOIN order_item o ON o.payment_id = p.payment_id " +
            "WHERE p.member_id = #{memberId} " +
            "ORDER BY p.order_no DESC")  
    @ResultMap("PaymentMap")
    public List<Payment> selectList(Payment input);

    @Select("...")
    public int selectCount(Payment input);

    /**
     * 주문 중에 취소한 경우 남아있는 데이터 삭제를 위한 payment_id 조회
     * @return
     */
    @Select("SELECT payment_id FROM payment WHERE reg_date < DATE_ADD(NOW(), INTERVAL -1 hour) AND payment_id NOT IN (SELECT payment_id FROM order_item)")
    
    public List<Integer> selectPaymentId();

    /**
     * 주문 중에 취소한 경우 남아있는 데이터 삭제
     * 
     * @return
     */
    @Delete("<script>" +
            "DELETE FROM payment WHERE payment_id IN " +
            "<foreach item='paymentId' collection='paymentIds' open='(' separator=',' close=')'>" +
            "#{paymentId}" +
            "</foreach>" +
            "</script>")
    public int deleteByCancelOrder(List<Integer> paymentIds);
}