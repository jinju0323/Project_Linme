package kr.project.linme.services;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootTest
public class SalesServiceTest {
    @Autowired
    private SalesService salesService;

    @Test
    @DisplayName("매출 집계 추가 테스트")
    public void addItem() {
        try {
            salesService.addItem();
        } catch (Exception e) {
            log.error("매출 집계 추가 테스트에 실패했습니다.", e);
        }
    }
}