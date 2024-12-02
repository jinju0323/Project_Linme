package kr.project.linme.controllers;

import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;
import kr.project.linme.models.Member;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

@Controller
public class MypageController {

    @GetMapping("/myPage")
    public String myPage(HttpSession session, Model model) {
        Member memberInfo = (Member) session.getAttribute("memberinfo");
        if (memberInfo != null) {
            // 로그인하지 않은 경우 처리
            return "redirect:/login";
        }
        model.addAttribute("memberinfo", memberInfo);
        return "myPage/myPage";
    }
    
    @GetMapping("/myPage/profile")
    public String getProfilePage(HttpSession session, Model model) {
        Member memberInfo = (Member) session.getAttribute("memberInfo");

        if (memberInfo == null) {
            memberInfo = new Member();
            memberInfo.setProfile("/assets/img/myPage/profileimg.jpg"); // 기본 프로필 이미지 경로 설정
            session.setAttribute("memberInfo", memberInfo);
        } else if (memberInfo.getProfile() == null || memberInfo.getProfile().isEmpty()) {
            memberInfo.setProfile("/assets/img/myPage/profileimg.jpg"); // 기본값 설정
        }

        model.addAttribute("memberInfo", memberInfo);
        return "myPage/profile";
    }


    @GetMapping("/myPage/level")
    public String level() {
        return "myPage/level";
    }

    @GetMapping("/myPage/reward")
    public String reward() {
        return "myPage/reward";
    }

    @GetMapping("/myPage/reward/history")
    public String history() {
        return "myPage/reward/history";
    }
    @GetMapping("/myPage/myinfo")
    public String myinfo() {
        return "myPage/myinfo";
    }

    @GetMapping("/myPage/myinfo/modify")
    public String modify() {
        return "/myPage/myinfo/modify";
    }

    @GetMapping("/myPage/myinfo/passwordModify")
    public String passwordModify() {
        return "/myPage/myinfo/passwordModify";
    }

    @GetMapping("/myPage/myinfo/notification")
    public String notification() {
        return "/myPage/myinfo/notification";
    }

    @GetMapping("/myPage/myinfo/withdrawal")
    public String withdrawal() {
        return "/myPage/myinfo/withdrawal";
    }


    @GetMapping("/myPage/productInquiry")
    public String productInquiry(Model model) {
        return "myPage/productInquiry";
    }

    @GetMapping("/myPage/refundAccount")
    public String refundAccount(Model model) {
        return "myPage/refundAccount";
    }

    @GetMapping("/myPage/addressBook")
    public String addressBook() {
        return "myPage/addressBook";
    }

    @GetMapping("/myPage/addressBookAdd")
    public String addressBookAdd() {
        return "myPage/addressBookAdd";
    }

    @GetMapping("/myPage/notice")
    public String notice(Model model) {
        return "myPage/notice";
    }

    @GetMapping("/myPage/faq")
    public String faq(Model model) {
        return "myPage/faq";
    }

    @GetMapping("/myPage/inquiry")
    public String injury(Model model) {
        // model.addAttribute("username", "사용자 이름");
        // model.addAttribute("grade", "등급");
        // model.addAttribute("reward", "리워드");

        // model.addAttribute("shoppingHistoryCount", 0); 
        // model.addAttribute("couponCount", 0);           
        // model.addAttribute("reviewCount", 0);
        return "myPage/inquiry";
    }

    
}
