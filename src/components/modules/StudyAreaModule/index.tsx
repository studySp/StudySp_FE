import Section from "@/components/ui/section";
import Rooms from "./rooms";
import SoloStudyRoom from "./soloStudy";

function StudyAreaModule() {
  return (
    <Section
      title="Môi trường học tập"
      subTitle="Tạo phòng của bạn, học một mình <br> hoặc tham gia vào những phòng học hiện có"
    >
      <SoloStudyRoom />
      <Rooms />
    </Section>
  );
}

export default StudyAreaModule;
