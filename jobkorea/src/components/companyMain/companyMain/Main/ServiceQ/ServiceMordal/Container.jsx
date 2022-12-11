import ServiceModalComponent from "./Component";

<<<<<<< HEAD
const ServiceModalContainer = ({
  setServiceMordalIsClick,
  mordalIndex,
  setMordalIndex,
}) => {
  const closeOnClick = () => {
    setServiceMordalIsClick(false);
  };
  const prevClick = () => {
    if (mordalIndex == 1) return;
    setMordalIndex(mordalIndex - 1);
  };
  const nextClick = () => {
    if (mordalIndex == 8) return;
    setMordalIndex(mordalIndex + 1);
  };
  // return <ServiceModalComponent onClick={onClick}></ServiceModalComponent>;
  switch (mdIndex) {
    case 1:
      return (
        <ServiceModalComponent1 onClick={onClick}></ServiceModalComponent1>
      );
    case 2:
      return (
        <ServiceModalComponent2 onClick={onClick}></ServiceModalComponent2>
      );
    case 3:
      return (
        <ServiceModalComponent3 onClick={onClick}></ServiceModalComponent3>
      );
    case 4:
      return (
        <ServiceModalComponent4 onClick={onClick}></ServiceModalComponent4>
      );
    case 5:
      return (
        <ServiceModalComponent5 onClick={onClick}></ServiceModalComponent5>
      );
    case 6:
      return (
        <ServiceModalComponent6 onClick={onClick}></ServiceModalComponent6>
      );
    case 7:
      return (
        <ServiceModalComponent7 onClick={onClick}></ServiceModalComponent7>
      );
    case 8:
      return (
        <ServiceModalComponent8 onClick={onClick}></ServiceModalComponent8>
      );
  }
=======
const data = [
  {
    title: "1. 채용공고를 내고 싶은데 절차가 어떻게 되나요?",
    text: [
      "잡코리아에 채용공고 등록을 원하시면 기업회원 ID로 로그인을 먼저 해주세요.",
      {
        divList: [
          "기업 회원가입",
          "로그인",
          "채용공고 등록양식 작성",
          "등록 완료",
        ],
      },
      "ID가 없으시면 먼저 회원가입부터 진행하여 주세요. 회원가입은 무료입니다.",
      "로그인하신 후 채용공고등록 페이지로 이동하셔서 채용공고 내용을 입력하신 후 채용공고 등록완료 버튼을 클릭하시면 됩니다.",
      "-",
      "채용공고등록에 대한 별도 등록비용은 없으며, 무료로 등록하신 채용공고는 선택하신 업·직종 및 상세지역 등의 채용정보 리스트에서 게재되어 구직자에게 노출됩니다. 보다 효과적으로 구직자에게 채용공고 노출을 원하시면 차별화 된 노출위치와 노출효과를 제공하는 잡코리아 유료 채용광고 서비스를 함께 이용하시면 좋습니다.",
    ],
  },
  {
    title: "2. 온라인 채용시스템이 무엇인가요?",
    text: [
      "인터넷을 이용한 채용은 새로운 채용방법으로 널리 사용되고 있습니다.",
      {
        numList: [
          "온라인 채용 시스템은 기존의 채용업무를 온라인으로 옮겨 놓은 것입니다.",
          "채용공고 등록에서부터 지원자 접수, 서류 전형과 최종합격까지 모두 처리 가능하도록 지원합니다.",
          "기업회원 가입은 무료이며, 가입 후 기업회원 서비스의 채용관리에서 제공하는 모든 서비스를 이용할 수 있습니다.",
          "채용관리에서는 채용공고 등록, 채용공고 수정, 채용공고 복사, 채용공고 마감, 입사 지원자 관리 및 예비합격자 관리, 지원자 점수등록, 면접제의 e-메일 발송 등 채용에 필요한 모든 기능을 통합적으로 제공하고 있습니다.",
        ],
      },
    ],
  },
  {
    title: "3. 온라인 입사자들은 어디서 확인하나요?",
    text: [
      "기업회원님의 아이디로 로그인 하신 후",
      {
        numList: [
          "기업회원 홈 > 채용공고·지원자 관리로 이동하시면 등록하신 채용공고별로 인재관리를 확인하실 수 있습니다.",
          "인재관리에서 입사지원자 뿐만 아니라 예비합격자, 인재스크랩, 공고스크랩, 맞춤인재의 이력서를 확인 가능합니다.",
        ],
      },
      {
        starList: [
          "입사지원자 - 채용공고에 입사지원한 인재의 이력서 확인 가능",
          "예비합격자 - 입사지원자, 인재스크랩, 공고스크랩, 맞춤인재를 통해서 예비합격으로 분류된 이력서 확인 가능",
          "인재스크랩 - 내가 직접 인재 스크랩을 한 이력서 확인 가능",
          "관심인재 - 내가 등록한 채용공고를 스크랩한 인재의 이력서 확인 가능",
          "맞춤인재 - Smart Match를 통해 내가 등록한 채용공고에 가장 적합한 이력서 확인 가능",
        ],
      },
      "입사지원자의 경우, 예비합격 여부와 점수는 지원자 및 개인회원에게 공개되지 않습니다.",
      "즉 지원자 관리용으로 자유롭게 이용하실 수 있습니다.",
      "채용관리의 지원자 보기에서는 사전 인터뷰 답변 내용, 온라인 인·적성 검사 결과, 온라인 추천서 등도 함께 확인할 수 있습니다.",
    ],
  },
  {
    title: "4. 입사제의 서비스는 무엇인가요?",
    text: [
      "기업에서 이력서 검색을 하신 후에 관심있는 개인회원에게 입사제의를 할 수 있습니다. ",
      "입사제의를 하게 되면, 해당 개인회원에게 자동으로 메일이 발송되며 개인회원은 기업에서 발송한 메일을 보고 응답할 수 있습니다.",
      "회사에 적합한 인재가 있다면, 입사제의 서비스를 이용하시고 좋은 인재를 만나시길 바랍니다.",
    ],
  },
  {
    title: "5. 관심있는 이력서를 스크랩할 수 있나요?",
    text: [
      "이력서 검색을 하시다가 관심있는 이력서가 있을 경우에는 이력서 보기 화면 우측 메뉴를 보시면 [☆ 인재 스크랩] 버튼이 있습니다.",
      "[☆ 인재 스크랩] 버튼을 한번 클릭하면 스크랩하실 수 있습니다.",
      "일반기업, 헤드헌팅, 파견대행 회원으로 각각 로그인 하신 후 스크랩 할 수 있습니다.",
    ],
  },
  {
    title: "6. 스크랩한 인재는 어디에서 확인이 가능한가요?",
    text: [
      "기업회원님의 아이디로 로그인 하신 후",
      {
        numList: [
          "기업회원 홈 >스크랩·인재 관리 메뉴에서 확인하실 수 있습니다.",
          "채용공고에 스크랩하신 경우에는 기업회원 홈 > 채용공고·지원자 관리에서도 확인하실 수 있습니다.",
        ],
      },
      "스크랩 한 이력서는 스크랩일로부터 90일간 보관되며, 스크랩한 이력서를 포함한 이력서의 상세정보와 연락처는 서칭서비스 이용기간에만 열람 가능합니다.",
    ],
  },
  {
    title: "7. 마감된 채용공고를 다시 진행하고 싶은데 어떻게 하나요?",
    text: [
      "마감된 채용공고는 수정기능이 존재하지 않으니, 복사기능을 이용하시기 바랍니다.",
      {
        numList: [
          "기업회원 홈 > 스크랩·인재 관리 > 마감된 채용공고 리스트에서 채용공고를 찾은 후",
          "버튼을 클릭 후 마감일 및 변경사항이 있는지 여부를 확인 후 등록하시면 동일한 내용의 공고를 편리하게 등록하실 수 있습니다.",
        ],
      },
    ],
  },
  {
    title: "8. 채용공고를 대신 등록해 줄 수 있나요?",
    text: [
      "인터넷 사용이 익숙하지 않아서, 기업회원 가입 및 채용공고 등록에 어려움을 겪으시는 분들을 위해서 잡코리아 채용공고 e-메일 접수에 의한 등록대행을 무료로 제공하고 있습니다.",
      "잡코리아 고객센터 [1588-9350] 으로 연락주시거나 고객센터 메일 혹은 helpdesk@jobkorea.co.kr 로 연락주시면 등록 방법에 대한 안내를 드리도록 하겠습니다.",
    ],
  },
];

const ServiceModalContainer = ({ setMordalC, mdIndex, setMdIndex }) => {
  const onClick = () => {
    setMordalC(false);
  };
  const prevClick = () => {
    if (mdIndex == 1) return;
    setMdIndex(mdIndex - 1);
  };
  const nextClick = () => {
    if (mdIndex == 8) return;
    setMdIndex(mdIndex + 1);
  };
  return (
    <ServiceModalComponent
      mdIndex={mdIndex}
      onClick={onClick}
      prevClick={prevClick}
      nextClick={nextClick}
      data={data[mdIndex - 1]}
    ></ServiceModalComponent>
  );
  // switch (mdIndex) {
  //   case 1:
  //     return (
  //       <ServiceModalComponent1 onClick={onClick}></ServiceModalComponent1>
  //     );
  //   case 2:
  //     return (
  //       <ServiceModalComponent2
  //         onClick={onClick}
  //         data={imsiData[1]}
  //       ></ServiceModalComponent2>
  //     );
  //   case 3:
  //     return (
  //       <ServiceModalComponent3
  //         onClick={onClick}
  //         data={imsiData[2]}
  //       ></ServiceModalComponent3>
  //     );
  //   case 4:
  //     return (
  //       <ServiceModalComponent4 onClick={onClick}></ServiceModalComponent4>
  //     );
  //   case 5:
  //     return (
  //       <ServiceModalComponent5 onClick={onClick}></ServiceModalComponent5>
  //     );
  //   case 6:
  //     return (
  //       <ServiceModalComponent6 onClick={onClick}></ServiceModalComponent6>
  //     );
  //   case 7:
  //     return (
  //       <ServiceModalComponent7 onClick={onClick}></ServiceModalComponent7>
  //     );
  //   case 8:
  //     return (
  //       <ServiceModalComponent8 onClick={onClick}></ServiceModalComponent8>
  //     );
  // }
>>>>>>> b46ead6 (1211 Company Mainpage UI)
};

export default ServiceModalContainer;
