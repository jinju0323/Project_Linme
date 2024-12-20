package kr.project.linme.mappers;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import kr.project.linme.models.Payment;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest
public class PaymentMapperTest {
    @Autowired
    private PaymentMapper paymentMapper;

    //입력 테스트
    @Test
    @DisplayName("결제 테스트")
    void insertPayment(){
        Payment input=new Payment();
        input.setMemberId(4);
        input.setOrderName("심진주");
        input.setOrderTel("010-1234-5678");
        input.setAddr1("서울특별시 성동구 성수로 19");
        input.setAddr2("집");
        input.setNickname("jinju");
        input.setAddrMsg("도착 시 연락부탁드립니다.");
        input.setDiscountPrice(3000);
        input.setTotalPrice(45000);

        int output=paymentMapper.insert(input);

        log.debug("output: "+output);
        log.debug("new paymentId: "+input.getPaymentId());
    }

    // 수정 테스트
    @Test
    @DisplayName("수정 테스트")
    void updatePayment(){
        Payment input=new Payment();
        
        input.setPaymentId(272);

        input.setOrderName("프로젝트");
        input.setOrderTel("010-5678-1234");
        input.setAddr1("서울특별시 서초구 강남대로 10");
        input.setAddr2("직장");
        input.setNickname("jinju2");
        input.setAddrMsg("도착 시 연락부탁드립니다.");
        // input.setDiscountPrice(8000);
        input.setTotalPrice(40000);
        

        int output=paymentMapper.update(input);

        log.debug("output: "+output);
    }

    // 삭제 테스트
    @Test
    @DisplayName("삭제 테스트")
    void deletePayment(){
        Payment input=new Payment();
        input.setPaymentId(1);

        int output =paymentMapper.delete(input);
        log.debug("output: "+output);
    }

    // 한 개의 결제 목록 조회 테스트
    @Test
    @DisplayName("한개의 목록 조회 테스트")
    void selectItemPayment(){
        Payment input=new Payment();
        input.setPaymentId(2);

        Payment output=paymentMapper.selectItem(input);
        log.debug("output: "+ output.toString());
    }

    // 결제 목록 조회 테스트
    @Test
    @DisplayName("목록 조회 테스트")
    void selectListPayment(){
        List<Payment> output=paymentMapper.selectList(null);

        for (Payment item : output) {
            log.debug("output: " + item.toString());
        }
    }

    // reg_date가 현재 시간에서 1시간 전인 모든 payment_id 조회
    @Test
    @DisplayName("reg_date가 현재 시간에서 1시간 전인 모든 payment_id 조회")
    void selectPaymentId(){
        List<Integer> output=paymentMapper.selectPaymentId();

        for (Integer item : output) {
            log.debug("output: " + item);
        }
    }
 
}
