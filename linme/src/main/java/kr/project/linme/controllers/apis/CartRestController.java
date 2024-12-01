package kr.project.linme.controllers.apis;

import java.util.LinkedHashMap;
import java.util.Map;

// import org.springframework.ui.Model;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.project.linme.helpers.RestHelper;
import kr.project.linme.models.Cart;
import kr.project.linme.services.CartService;

@RestController
public class CartRestController {

    @Autowired
    private CartService cartService;

    @Autowired
    private RestHelper restHelper;

    /**
     * Cart 수정
     * @param cartId - 수정할 Cart
     * @param productCount - 수정할 제품 수량
     * @return 수정된 Cart 객체를 포함한 JSON 데이터
     */
    @PutMapping("/api/cart/cart/edit")
    public Map<String,Object> editCart ( 
        @RequestParam("cartId") int cartId,
        @RequestParam("productCount") int productCount,
        @RequestParam("memberId") int memberId
     ) {
        Cart input = new Cart();
        input.setCartId(cartId);
        input.setProductCount(productCount);
        input.setMemberId(memberId);

        // 수정된 Cart 객체를 저장할 변수
        Cart output = null;

        try {
            output = cartService.editItem(input);
        } catch (Exception e) {
            return restHelper.serverError(e);
        }

        // JSON 데이터를 저장할 맵 생성
        Map<String, Object> data = new LinkedHashMap<String, Object>();
        data.put("cart", output);

        // 콘솔에 출력
        System.out.println(data);

        return restHelper.sendJson(data);
    }


    @DeleteMapping("/api/cart/deleteItem/{cartid}")
    public Map<String,Object> deleteItem ( @PathVariable("cartId") int cartId ) {

        Cart input = new Cart();
        input.setCartId(cartId);

        try {
            cartService.deleteItem(input);
        } catch (Exception e) {
            return restHelper.serverError(e);
        }

        return restHelper.sendJson();
    }
}
