import React from "react";
import { useTranslation } from "react-i18next";
import "@/i18n/i18n.js";

import Footer from "@/components/Footer";
import Center from "@/components/Center";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
`;
const Titlelsv2 = styled.h2`
  font-size: 18px;
`;
const Titlelsv3 = styled.h3`
  font-size: 16px;
  padding-left: 10px;
`;
const Text = styled.div`
  padding-left: 20px;
  padding-right: 50px;
  padding-bottom: 10px;
  text-align: justify;
  font-size: 16px;
`;

export default function chinhsachvanchuyen() {
  const { t } = useTranslation();
  return (
    <div>
      <Center>
        <Title>Chính sách vận chuyển</Title>
        <Titlelsv2>I. Phạm vi và đối tượng áp dụng</Titlelsv2>
        <Titlelsv3>1. Đối tượng áp dụng</Titlelsv3>
        <Text>
          Chính sách vận chuyển này áp dụng đối với người mua, người bán, các
          đơn vị cung cấp dịch vụ vận chuyển, nhân viên giao nhận (shipper) của
          các đơn vị cung cấp dịch vụ vận chuyển trên sàn tmđt Techfood (“sàn
          Techfood”); Khái niệm người mua sẽ được dùng để chỉ người mua hoặc
          người nhận hàng trong từng trường hợp; khái niệm người bán sẽ được
          dùng để chỉ người bán hoặc người gửi hàng trong từng trường hợp. Bằng
          cách sử dụng dịch vụ vận chuyển được hỗ trợ trên sàn Techfood, người
          mua/ người bán đã thừa nhận và đồng ý với các yêu cầu, và/hoặc các
          điều khoản và điều kiện, thực tiễn áp dụng nêu trong chính sách vận
          chuyển này. Techfood bảo lưu quyền sửa đổi chính sách vận chuyển này
          vào bất cứ thời điểm nào.
        </Text>
        <Titlelsv3>2. Phạm vi áp dụng</Titlelsv3>
        <Text>
          Chính sách vận chuyển này quy định về các loại hàng hóa không hỗ trợ
          vận chuyển, vận chuyển có điều kiện, quy định về đóng gói hàng hóa,
          các quyền, nghĩa vụ của các bên liên quan đến việc vận chuyển hàng hóa
          mà sàn Techfood hỗ trợ vận chuyển. Chính sách vận chuyển này không áp
          dụng đối với trường hợp người bán tự tổ chức vận chuyển hàng hóa của
          người bán, dù một phần hoặc toàn bộ. Trong trường hợp này, người bán
          phải đảm bảo tuân thủ các quy định của pháp luật có liên quan và tự
          chịu trách nhiệm trước pháp luật, người mua và bên thứ ba đối với phạm
          vi vận chuyển mà người bán tự tổ chức.
        </Text>
        <Titlelsv2>
          II. Quy định về hàng hóa không hỗ trợ vận chuyển, vận chuyển có điều
          kiện
        </Titlelsv2>
        <Titlelsv3>
          1.Quy định về các loại hàng hóa không hỗ trợ vận chuyển trên Techfood
        </Titlelsv3>
        <Text>
          1.1 Các loại hàng hóa không hỗ trợ vận chuyển trên sàn Techfood bao
          gồm nhưng không giới hạn các loại hàng hóa sau: •Hàng hóa thuộc danh
          mục cấm/hạn chế trên sàn Techfood. Các vật phẩm làm bằng vàng, bạc, đá
          quý hoặc các loại kim khí quý khác; Hóa chất tẩy rửa đậm đặc, dung
          dịch/ bột dùng pha chế sản xuất công nghiệp; Đơn hàng có giá trị hàng
          hóa lớn hơn 50.000.000vnđ (tổng giá trị hàng hóa với giá khuyến mãi
          nếu có, không bao gồm mã giảm giá của Techfood, mã giảm giá của người
          bán, xu và phí vận chuyển); Đơn hàng có dấu hiệu gian lận, lợi dụng
          các chính sách, hỗ trợ của Techfood; Người mua/người bán không tuân
          theo các hướng dẫn, quy định và khuyến cáo về vận chuyển của Techfood
          được nêu ra trong chính sách vận chuyển; Người dùng vi phạm các tiêu
          chuẩn cộng đồng của Techfood. Các đơn hàng vi phạm về số lượng và giá
          trị mua hàng giới hạn theo từng chương trình khuyến mại. Nội dung chi
          tiết sẽ được thông báo theo từng chương trình; Hàng hóa không có đầy
          đủ hóa đơn, chứng từ chứng minh nguồn gốc, xuất xứ hàng hóa theo quy
          định của pháp luật; Các loại hàng hóa không hỗ trợ vận chuyển khác
          theo thông báo của Techfood trong từng thời điểm.
        </Text>
        <Text>
          1.2. Miễn trừ trách nhiệm cho Techfood và các bên có liên quan: với
          các mặt hàng thuộc danh mục Techfood không hỗ trợ vận chuyển kể trên,
          Techfood cũng như các bên có liên quan trong quá trình vận chuyển hàng
          hóa sẽ không chịu trách nhiệm nếu hàng hóa bị thu giữ, tiêu hủy hay hư
          hỏng, mất mát trong quá trình vận chuyển. Người bán chịu hoàn toàn
          trách nhiệm trước Techfood và pháp luật (nếu có) khi gửi hàng vi phạm
          chính sách vận chuyển của Techfood và pháp luật việt nam.
        </Text>
        <Text>
          1.3. Trong trường hợp người bán cố tình vi phạm các quy định về hàng
          hóa không hỗ trợ vận chuyển trên sàn Techfood, người bán phải bồi
          thường đầy đủ và toàn bộ các thiệt hại phát sinh mà Techfood và/hoặc
          các bên có liên quan trong quá trình vận chuyển phải gánh chịu.
        </Text>
        <Titlelsv2>III. Quy định về khiếu nại và bồi thường</Titlelsv2>
        <Text>
          Trong trường hợp có khiếu nại đối với hoạt động vận chuyển trên sàn
          Techfood, các bên có thể thực hiện khiếu nại với Techfood theo quy
          định dưới đây:
        </Text>
        <Titlelsv3>1. Thời hạn khiếu nại:</Titlelsv3>
        <Text>
          Để đảm bảo quyền lợi, người mua/ người bán cần phải thực hiện khiếu
          nại trong thời gian được quy định trong từng trường hợp dưới đây. Nếu
          quá thời hạn khiếu nại mà Techfood không nhận được bất kì khiếu nại,
          yêu cầu bồi thường nào từ người mua/người bán, Techfood được miễn trừ
          trách nhiệm, và sẽ không giải quyết bất kỳ khiếu nại, yêu cầu bồi
          thường nào phát sinh. Khiếu nại với đơn trả hàng hoàn tiền Khiếu nại
          vận chuyển với đơn giao không thành công (dành cho người bán): Đơn
          được cập nhật trạng thái chuyển hoàn thành công: • Hàng bị thất lạc
          khi hoàn trả: trong vòng 07 ngày sau khi đơn hàng được cập nhật trạng
          thái chuyển hoàn thành công. • Hàng bị hư hại/ không còn nguyên vẹn
          khi hoàn trả: trong vòng 03 ngày sau khi đơn hàng được cập nhật trạng
          thái chuyển hoàn thành công. • Đơn được cập nhật trạng thái chuyển
          hoàn không thành công: đơn sẽ được lưu tại kho của đơn vị vận chuyển
          và xử lý theo quy định. Nếu quá hạn 30 ngày (riêng đối với kênh hỏa
          tốc là 21 ngày) mà người bán không liên hệ với Techfood để xử lý đơn
          hàng, Techfood miễn trừ trách nhiệm, và sẽ không giải quyết bất kỳ
          khiếu nại, yêu cầu bồi thường nào phát sinh sau thời hạn này. Khiếu
          nại sai phí vận chuyển dẫn đến tiền hàng nhận được bị thiếu: trong
          vòng 7 ngày kể từ ngày khoản tiền hàng của đơn hàng được chuyển vào số
          dư tài khoản Techfood.
        </Text>
        <Titlelsv3>2. Cách thức khiếu nại:</Titlelsv3>
        <Text>
          Tối đa 10 ngày làm việc kể từ thời điểm nhận được đầy đủ bằng chứng
          hợp lệ từ các bên có liên quan. Trong trường hợp vụ việc có nhiều tình
          tiết phức tạp đòi hỏi cần nhiều thời gian để xác minh thì thời gian xử
          lý khiếu nại có thể kéo dài hơn.thời gian xử lý khiếu nại sẽ được
          Techfood thông báo cho các bên liên quan theo từng trường hợp cụ thể.
          B. Lưu ý: đối với các đơn hàng được vận chuyển theo quy định của pháp
          luật về bưu chính, thời hạn khiếu nại được áp dụng cho các đơn vị cung
          ứng dịch vụ bưu chính trên sàn Techfood tuân theo quy định về thời hạn
          khiếu nại của luật bưu chính. Tuy nhiên, người bán phải gửi khiếu nại
          đến đơn vị vận chuyển chịu trách nhiệm vận chuyển đơn hàng và trong
          trường hợp này quyền và nghĩa vụ giữa người bán và đơn vị vận chuyển
          sẽ được thực hiện theo quy định của pháp luật về bưu chính và chính
          sách của từng đơn vị vận chuyển.
        </Text>
        <Titlelsv3>3. Bằng chứng khiếu nại:</Titlelsv3>
        <Text>
          Khiếu nại với đơn trả hàng hoàn tiền (dành cho người mua/ người bán)
          Khiếu nại vận chuyển với đơn giao không thành công (dành cho người
          bán) Khi khiếu nại, người bán cần cung cấp các thông tin sau cho
          Techfood: Hình ảnh/video quá trình đóng gói hàng thấy rõ: (video là
          bằng chứng mạnh nhất được khuyến khích cung cấp khi phát sinh khiếu
          nại) Thông tin đơn hàng (mã đơn hàng/ mã vận đơn) Người bán đã
          đóng gói đúng, đủ hàng, sản phẩm còn nguyên vẹn & đóng gói đúng theo
          quy định về đóng gói hàng hóa của chính sách vận chuyển  Tình trạng
          bao bì gói hàng khi người bán gửi hàng đi Các bằng chứng khác (nếu
          có) Lưu ý: người bán cần phải giữ lại vận đơn/ hóa đơn vận chuyển mỗi
          khi giao hàng cho đơn vị vận chuyển. Khi có bất kỳ khiếu nại hay tranh
          chấp nào về mất mát hàng hóa xảy ra, vận đơn/hóa đơn vận chuyển sẽ là
          bằng chứng vững chắc nhất chứng minh người bán đã giao hàng. Thời hạn
          cung cấp bằng chứng: Trừ trường hợp có yêu cầu khác của Techfood trong
          từng vụ việc cụ thể, người khiếu nại phải cung cấp bằng chứng trong
          vòng 24 giờ kể từ khi gửi yêu cầu khiếu nại đến Techfood hoặc khi nhận
          được yêu cầu từ Techfood. Việc không thể cung cấp được bằng chứng hợp
          lệ trong thời hạn quy định/được yêu cầu có thể là lý do để Techfood từ
          chối yêu cầu của người khiếu nại.
        </Text>
      </Center>

      <Footer t={t}></Footer>
    </div>
  );
}
