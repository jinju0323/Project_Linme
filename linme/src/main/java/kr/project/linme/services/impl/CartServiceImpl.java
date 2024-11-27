package kr.project.linme.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.project.linme.mappers.CartMapper;
import kr.project.linme.models.Cart;
import kr.project.linme.services.CartService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartMapper cartMapper;

    @Override
    public Cart addItem(Cart input) throws Exception {
        int rows = 0;

        try {
            rows = cartMapper.insert(input);

            if (rows == 0) {
                throw new Exception("저장된 데이터가 없습니다.");
            }
        } catch (Exception e) {
            log.error("데이터 저장에 실패했습니다.", e);
            throw e;
        }

        return cartMapper.selectItem(input);
    }

    @Override
    public Cart editItem(Cart input) throws Exception {
        int rows = 0;

        try {
            rows = cartMapper.update(input);

            if (rows == 0) {
                throw new Exception("수정된 데이터가 없습니다.");
            }
        } catch (Exception e) {
            log.error("데이터 수정에 실패했습니다.", e);
            throw e;
        }

        return cartMapper.selectItem(input);
    }

    @Override
    public int deleteItem(Cart input) throws Exception {
        int rows = 0;

        try {
            rows = cartMapper.delete(input);

            if (rows == 0) {
                throw new Exception("삭제된 데이터가 없습니다.");
            }
        } catch (Exception e) {
            log.error("데이터 삭제에 실패했습니다.", e);
            throw e;
        }

        return rows;
    }

    @Override
    public Cart getItem(Cart input) throws Exception {
        Cart output = null;

        try {
            output = cartMapper.selectItem(input);

            if (output == null) {
                throw new Exception("조회된 데이터가 없습니다.");
            }
        } catch (Exception e) {
            log.error("데이터 조회에 실패했습니다.", e);
            throw e;
        }

        return output;
    }

    @Override
    public List<Cart> getList(Cart input) throws Exception {
        List<Cart> output = null;

        try {
            output = cartMapper.selectList(input);
        } catch (Exception e) {
            log.error("데이터 목록 조회에 실패했습니다.", e);
            throw e;
        }

        return output;
    }

    @Override
    public int getCount(Cart input) throws Exception {
        int output = 0;

        try {
            output = cartMapper.selectCount(input);
        } catch (Exception e) {
            log.error("데이터 집계에 실패했습니다.", e);
            throw e;
        }

        return output;
    }
}