document.querySelectorAll(".guideItem").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
      html: `
      <div class="scrollable-content">
      <p>린미(Linme) 서비스 이용약관</p><br>
        <p>제 1장 총칙</p>
        <p> 1조 (목적)<br>
        1-1. 이 약관은 주식회사 이노즈(이하 "회사"라 함)가 운영하는 ‘린미’ 인터넷 쇼핑몰 (www.linme.kr, 이하 "린미"라 함)와 스마트폰 등 이동통신기기를 통해 제공되는 ‘린미’ 모바일 애플리케이션(이하 “린미앱”이라고 합니다)에 판매회원으로 가입하여 전자상거래 관련 서비스 및 기타 서비스(이하 "서비스"라 함)를 이용하는 자간의 권리, 의무를 확정하고 이를 이행함으로써 상호 발전을 도모하는 것을 그 목적으로 합니다.</p>
        <p>제 2조(약관의 명시, 효력과 개정)<br>
        2-1. 회사는 이 약관의 내용을 회사의 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처(전화, 팩스, 전자우편주소 등)등과 함께 회원이 확인할 수 있도록 “린미” 초기 서비스화면 또는 연결화면에 게시합니다.<br>
        2-2. 회사는 약관의규제에관한법률, 전자문서 및 전자거래기본법, 전자서명법, 정보통신망이용촉진및정보보호등에관한법률, 전자상거래등에서의소비자보호에관한법률, 전자금융거래법 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.<br>
        2-3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 초기화면에 그 적용일자 14일 이전부터 적용일자 전일까지 공지합니다. 다만, 변경 내용이 중대하거나 구매회원에게 불리한 경우에는 그 적용일자 30일 이전부터 적용일자 전일까지 공지하고 구매회원에게 개별 통지합니다.변경된 약관은 그 적용일자 이전으로 소급하여 적용되지 아니합니다.</p>
        <p>제 3조 (서비스의 종류<br>
        3-1. 회사가 제공하는 서비스는 다음과 같습니다.<br>
        3-1-1. E-Commerce Platform 개발 및 운영서비스<br>
        ① 판매관련 업무지원서비스<br>
        ② 구매관련 지원서비스<br>
        ③ 매매계약체결 관련 서비스<br>
        ④ 상품 정보검색 서비스<br>
        ⑤ 기타 전자상거래 관련 서비스<br>
        3-1-2. 광고 집행 및 프로모션 서비스<br>
        3-2. 회사가 제공하는 전항의 서비스는 회원이 재화 등을 거래할 수 있도록 사이버몰의 이용을 허락하거나, 통신판매를 알선하는 것을 목적으로 하며, 개별 판매회원(판매자)이 린미와 린미앱에 등록한 상품과 관련해서는 일체의 책임을 지지 않습니다.</p>
        <p>제 4조 (대리행위의 부인)<br>
        4-1. 회사는 통신판매중개자로서 효율적인 서비스를 위한 시스템 운영 및 관리 책임만을 부담하며, 재화 또는 용역의 거래와 관련하여 구매자 또는 판매자를 대리하지 아니하고, 회원 사이에 성립된 거래 및 회원이 제공하고 등록한 정보에 대해서는 해당 회원이 그에 대한 직접적인 책임을 부담하여야 합니다.</p>
        <p>제 5조 (보증의 부인)<br> 
5-1. 회사는 회사가 제공하는 시스템을 통하여 이루어지는 구매자와 판매자 간의 거래와 관련하여 판매의사 또는 구매의사의 존부 및 진정성, 등록물품의 품질, 완전성, 안정성, 적법성 및 타인의 권리에 대한 비침해성, 구매자 또는 판매자가 입력하는 정보 및 그 정보를 통하여 링크된 URL에 게재된 자료의 진실성 또는 적법성 등 일체에 대하여 보증하지 아니하며, 이와 관련한 일체의 위험과 책임은 해당 회원이 전적으로 부담합니다. 다만, 관련 법령에 따라 회사가 책임지는 경우에는 그러하지 아니합니다.</p>

<p>제 2장 이용계약 및 정보보호</p>

<p>제 6조 (구매 서비스 이용계약의 성립)<br> 
6-1. 구매 서비스 이용계약(이하 "이용계약"이라고 합니다)은 회사가 제공하는 구매 서비스를 이용하고자 하는 자의 이용신청에 대하여 회사가 이를 승낙함으로써 성립합니다. 회사는 이용승낙의 의사표시를 해당 서비스화면에 게시하거나 email 또는 기타 방법으로 통지합니다.<br> 
6-2. 구매 서비스를 이용하고자 하는 자는 이 약관에 동의하고, 회사가 정하는 회원 가입 신청 양식에 따라 필요한 사항을 기입합니다.<br> 
6-3. 회원가입은 만 14세 이상의 개인이 할 수 있으며, 이용신청자는 실명으로 가입신청을 해야 하며, 실명이 아니거나 타인의 정보를 도용하는 경우 서비스이용이 제한되거나 관련 법령에 의거 처벌받을 수 있습니다.<br> 
6-4. 이용신청의 처리는 신청순서에 의하며, 회원가입의 성립시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.<br> 
6-5. 회사는 다음과 같은 사유가 발생한 경우 이용신청에 대한 승낙을 거부하거나 유보할 수 있습니다.<br> 
6-5-1. 회사의 실명확인절차에서 실명가입신청이 아님이 확인된 경우<br> 
6-5-2. 이미 가입된 회원과 이름 및 주민등록번호가 동일한 경우<br> 
6-5-3. 회사로부터 회원자격 정지 조치 등을 받은 회원이 그 조치기간 중에 이용계약을 임의 해지하고 재이용신청을 하는 경우<br> 
6-5-4. 설비에 여유가 없거나 기술상 지장이 있는 경우<br> 
6-5-5. 기타 이 약관에 위배되거나 위법 또는 부당한 이용신청임이 확인된 경우 및 회사가 합리적인 판단에 의하여 필요하다고 인정하는 경우</p>

<p>제 7조 (개인정보의 변경, 보호)<br> 
7-1. 회원은 이용신청 시 허위의 정보를 제공하여서는 아니 되며, 기재한 사항이 변경되었을 경우에는 즉시 변경사항을 최신의 정보로 수정하여야 합니다. 이름, ID, 주민등록번호는 수정할 수 없으나 법령에 의한 경우는 예외적으로 수정 가능합니다.<br> 
7-2. 회사의 회원에 대한 통지는 회원이 제공한 주소 또는 e-mail주소에 도달하거나 회원이 제공한 휴대폰번호에 알림톡 등 전자적 안내방법으로 도달함으로써 통지된 것으로 보며, 수정하지 않은 정보로 인하여 발생하는 손해는 당해 회원이 전적으로 부담하며, 회사는 이에 대하여 아무런 책임을 지지 않습니다.<br> 
7-3. 회사는 이용계약을 위하여 회원이 제공한 정보를 회원이 동의한 회사 서비스 운영을 위한 목적 이외의 용도로 사용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용·제공단계에서 당해 회원에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.<br> 
7-4. 회사는 개인정보의 수집·이용·제공에 관한 동의란을 미리 선택한 것으로 설정해두지 않습니다. 또한 개인정보의 수집·이용·제공에 관한 이용자의 동의거절시 제한되는 서비스를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보의 수집·이용·제공에 관한 구매서비스를 이용하고자 하는 자의 동의 거절을 이유로 회원가입 등 서비스 제공을 제한하거나 거절하지 않습니다.<br> 
7-5. 회사는 회원의 개인정보를 보호하기 위해 제3자에게 구매회원의 개인정보를 제공할 필요가 있는 경우에는 실제 청약시에 제공되는 개인정보 항목, 제공받는 자, 제공받는 자의 개인정보 이용목적 및 보유·이용기간 등을 명시하여 구매회원의 동의를 받고, 개인정보를 위탁하는 경우에는 관련 법령이 정하는 바에 따라 "개인정보처리방침"을 수립하고 개인정보 보호 책임자를 지정하여 이를 게시하고 운영합니다.</p>

<p>제 8조 (아이디 및 비밀번호의 관리)<br> 
8-1. 아이디(ID) 및 비밀번호에 대한 관리책임은 회원에게 있으며, 회원은 어떠한 경우에도 본인의 아이디(ID) 또는 비밀번호를 타인에게 양도하거나 대여할 수 없습니다.<br> 
8-2. 회사의 귀책사유 없이 아이디(ID) 또는 비밀번호의 유출, 양도, 대여로 인하여 발생하는 손실이나 손해에 대하여는 회원 및 이용자 본인이 그에 대한 책임을 부담합니다.<br> 
8-3. 회원은 아이디(ID) 또는 비밀번호를 도난당하거나 제3자가 무단으로 이를 사용하고 있음을 인지한 경우, 이를 즉시 회사에 통보하여야 하고 회사는 이에 대한 신속한 처리를 위하여 최선의 노력을 다하여야 합니다.</p>

<p>제 9조 (이용계약의 종료)<br> 
9-1. 회원의 해지<br> 
9-1-1. 회원은 언제든지 해당 서비스화면을 통하여 회사에게 해지의사를 통지함으로써 이용계약을 해지할 수 있습니다.<br> 
9-1-2. 전호의 기간 내에 회원이 발한 의사표시로 인해 발생한 불이익에 대한 책임은 회원 본인이 부담하여야 하며, 이용계약이 종료되면 회사는 회원에게 부가적으로 제공한 각종 혜택을 회수할 수 있습니다.<br> 
9-1-3. 회원의 의사로 이용계약을 해지한 후, 추후 재이용을 희망할 경우에는 해지한 기간으로부터 15일이 지난 후 서비스 재이용이 가능합니다.</p>

<p>제 10조 (서비스기간과 중단)<br> 
10-1. 본 약관에 따른 서비스 기간은 서비스 신청일로부터 이용계약의 해지 시까지 입니다.<br> 
10-2. 회사는 컴퓨터 등 정보통신설비의 보수, 점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 서비스 일시 중단 사실과 그 사유를 린미 초기화면에 통지합니다.<br> 
10-3. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스의 제공을 제한하거나 일시 중단할 수 있습니다.</p>

<p>제 11조 (서비스 이용료)<br> 
11-1. 회사는 회원 간의 자유로운 전자상거래에 있어서 필요로 하는 각종 서비스를 제공하고 회사의 내부 정책에 따라 그에 대한 이용료(서비스 이용료)를 부과할 수 있습니다.</p>
      `,
      confirmButtonText: "확인",
      width: 768,
      height: 850,
      customClass: {
        htmlContainer: "custom-html",
        confirmButton: "required-button",
      },
    });
  });
});


document.querySelectorAll(".guideItem2").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
      html: `
      <div class="scrollable-content">
      <p>린미(Linme) 개인정보 처리방침</p><br>
        <p>린미(Linme)는 고객의 개인정보보호를 소중하게 생각하고, 고객의 개인정보를 보호하기 위하여 항상 최선을 다하고 있습니다. 
                        린미는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 및 같은 법 시행령 등 
                        정보통신서비스 제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 지키며...</p>

                        <p>린미 「개인정보처리방침」은 아래와 같은 내용을 담고 있습니다.</p>

                        <ul>
                            <li>1. 개인정보의 수집에 대한 동의</li>
                            <li>2. 개인정보의 수집 및 이용 목적</li>
                            <li>3. 개인정보의 수집 항목</li>
                            <li>4. 개인정보의 수집 방법</li>
                            <li>5. 개인정보의 보유 및 이용기간</li>
                            <li>6. 수집한 개인정보의 이용 및 제3자 제공</li>
                            <li>7. 개인정보의 열람 및 정정</li>
                            <li>8. 개인정보의 수집, 이용, 제공에 대한 동의철회</li>
                            <li>9. 개인정보 파기절차 및 방법</li>
                            <li>10. 비회원 개인정보보호</li>
                            <li>11. 아동의 개인정보보호</li>
                            <li>12. 개인정보처리 업무의 위탁</li>
                            <li>13. 개인정보처리방침의 고지 또는 통지방법</li>
                            <li>14. 개인정보보호를 위한 기술 및 관리적 대책</li>
                            <li>15. 링크 사이트</li>
                            <li>16. 게시물</li>
                            <li>17. 개인정보 자동 수집장치의 설치•운영 및 그 거부에 대한 사항</li>
                            <li>18. 이용자의 권리와 의무</li>
                            <li>19. 의견수렴 및 불만처리</li>
                            <li>20. 개인정보보호 책임자 및 담당자</li>
                            <li>21. 광고성 정보 전송</li>
                            <li>22. 고지의무</li>
                        </ul>

                        <p>1. 개인정보 수집에 대한 동의<br>
                        린미는 고객님께서 개인정보처리방침 또는 이용약관의 내용에「동의한다」또는「동의하지 않는다」버튼을 클릭할 수 있는 절차를 마련하고 있으며, 
                        「동의한다」버튼을 클릭하면 개인정보 수집에 동의한 것으로 간주합니다.</p>

                        <p>2. 개인정보의 수집 및 이용 목적<br>
                        "개인정보"는 생존하는 개인에 관한 정보로서 해당 정보에 포함된 성명, 주민등록번호 등의 사항으로 해당 개인을 식별할 수 있는 정보(해당 정보만으로는 특정 개인을 식별할 수 없더라도 
                        다른 정보와 쉽게 결합하여 식별할 수 있는 것을 포함)를 말합니다. 린미가 고객의 개인정보를 수집 이용하는 목적은 다음과 같습니다.</p>

                        <p>(회원 관리)<br>
                        * 회원제 서비스 이용에 따른 회원식별<br>
                        * 불량회원의 부정이용 방지와 비인가 사용 방지, 중복가입방지<br>
                        * 가입의사 확인, 가입 및 가입횟수 제한<br>
                        * 미성년자의 확인<br>
                        * 고객상담, 고객불만 접수 및 처리, 분쟁조정을 위한 기록보존<br>
                        * 고지사항 전달<br>
                        * 아이디(ID) 부정 사용 방지<br>
                        * 부정거래 방지</p>

                        <p>(서비스 제공에 관한 계약의 이행 및 서비스 제공에 따른 요금정산)</strong><br>
                        * 회원간 거래 서비스 제공<br>
                        * 콘텐츠 제공, 이벤트 당첨 결과안내 및 상품배송<br>
                        * 금융거래 관련 본인인증 및 금융서비스<br>
                        * 청구서 발송, 구매 및 요금결제, 요금추심<br>
                        * 부정거래 방지</p>

                        <p>(마케팅 및 광고에 활용)<br>
                        * 고객에게 최적화된 서비스 제공<br>
                        * 신규 서비스(제품) 개발 및 특화<br>
                        * 인구통계학적 특성에 따른 서비스 제공 및 광고 게재<br>
                        * 웹페이지 접속 빈도 파악<br>
                        * 정기 간행물 발송, 새로운 상품 또는 서비스 안내<br>
                        * 고객 관심사에 부합하는 웹서비스 및 이벤트 기획<br>
                        * 고객 기념일 축하 메시지 전달<br>
                        * 경품행사, 이벤트 등 광고성 정보 전달 또는 회원 참여공간 운영<br>
                        * 고객대상 설문조사<br>
                        * 서비스 및 상품 안내</p>

                        <p>3. 개인정보의 수집 항목<br>
                        가. 린미는 기본적인 서비스 제공을 위한 필수 정보만을 수집하고 있으며 고객 각각의 기호와 필요에 맞는 서비스를 제공하기 위하여 정보 수집 때 별도 동의를 얻고 있습니다. 
                        선택 정보를 입력하지 않아도 서비스 이용에 제한은 없습니다.</p>

                        <p>나. 린미는 이용자의 기본적 인권을 침해할 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록 등)는 수집하지 않습니다. 
                        그리고, 어떤 경우에라도 입력하신 정보를 이용자들에게 미리 밝힌 목적 이외의 다른 목적으로는 사용하지 않으며 외부로 유출하지 않습니다.</p>

                        <p>다. 린미는 다음과 같이 개인정보를 수집하여 이용합니다.</p>
                        <ul>
                            <li>[필수]<br>
                            * 회원 공통(개인구매회원) : 성명, 아이디(ID), 비밀번호(Password), 휴대전화번호, 이메일(E-mail) 주소 등</li>
                            <li>성명, 아이디(ID), 이메일(E-mail), 주소, 휴대전화번호, 서비스이용기록 등</li>
                        </ul>
      `,
      confirmButtonText: "확인",
      width: 768,
      height: 850,
      customClass: {
        htmlContainer: "custom-html",
        confirmButton: "required-button",
      },
    });
  });
});