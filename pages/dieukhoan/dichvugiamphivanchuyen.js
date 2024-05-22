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

export default function dichvugiamphivanchuyen() {
  const { t } = useTranslation();
  return (
    <div>
      <Center>
        <Title>DỊCH VỤ GIẢM PHÍ VẬN CHUYỂN</Title>
        <Titlelsv2>
          1. Techfood sẽ cung cấp dịch vụ giảm chi phí vận chuyển{" "}
        </Titlelsv2>
        <Text>
          Các đơn hàng của người bán tại sàn giao dịch thương mại điện tử
          Techfood (sau đây được gọi là “dịch vụ giảm chi phí vận chuyển”) theo
          từng giai đoạn. Người bán có thể chọn mua dịch vụ giảm chi phí vận
          chuyển. Techfood cung cấp dịch vụ giảm chi phí vận chuyển theo các
          điều khoản dịch vụ này (sau đây được gọi là “điều khoản sử dụng dịch
          vụ giảm chi phí vận chuyển”) được đăng tải trên trang web hoặc thông
          báo cho người bán. Người bán chọn mua dịch vụ giảm chi phí vận chuyển
          đồng ý tuân thủ và chịu sự điều chỉnh của điều khoản sử dụng dịch vụ
          giảm chi phí vận chuyển. Nếu bạn không đồng ý chịu sự điều chỉnh của
          điều khoản sử dụng dịch vụ giảm chi phí vận chuyển, vui lòng không
          chọn mua bất kỳ dịch vụ giảm chi phí vận chuyển nào.
        </Text>
        <Titlelsv2>2. Để mua dịch vụ giảm chi phí vận chuyển</Titlelsv2>
        <Text>
          Bạn phải là người bán đủ điều kiện theo quy định của điều khoản sử
          dụng dịch vụ giảm chi phí vận chuyển. Vào thời điểm bạn mua và thanh
          toán cho dịch vụ giảm chi phí vận chuyển, tài khoản của bạn không được
          đang ở tình trạng bị đình chỉ hoặc tạm ngưng hoạt động.
        </Text>
        <Titlelsv2>3. Phí dịch vụ giảm chi phí vận chuyển</Titlelsv2>
        <Text>
          Một khoản tương đương 10% của tổng doanh thu bán hàng thực tế (chưa
          trừ thuế, phí, lệ phí nếu có) của người bán trên sàn giao dịch thương
          mại điện tử Techfood trong giai đoạn tính phí (“giai đoạn tính phí”)
          hoặc phí tối thiểu (có thể thay đổi theo từng thời kỳ), tùy giá trị
          nào lớn hơn (phí này chưa bao gồm vat 10%) Đơn hàng làm phát sinh tổng
          doanh thu bán hàng thực tế (chưa trừ thuế, phí, lệ phí nếu có) của
          người bán trên sàn giao dịch thương mại điện tử Techfood trong giai
          đoạn tính phí sẽ không bao gồm các đơn hàng bị người mua hủy hoặc hoàn
          trả, hoặc đơn hàng phát sinh trong các ngày có chính sách phí vận
          chuyển riêng theo quyết định của Techfood. Để tránh hiểu nhầm, các đơn
          hàng trong giai đoạn tính phí do người bán hủy vẫn được tính vào tổng
          doanh thu bán hàng thực tế phát sinh trong giai đoạn tính phí.
        </Text>
        <Titlelsv2>
          4. Quy trình thanh toán phí dịch vụ giảm chi phí vận chuyển
        </Titlelsv2>
        <Text>
          1. Theo định kỳ hàng tuần, Techfood gửi thống kê tổng doanh thu bán
          hàng thực tế (chưa trừ thuế, phí, lệ phí nếu có) của người bán trên
          sàn giao dịch thương mại điện tử Techfood cùng tổng phí dịch vụ tương
          ứng mà người bán phải thanh toán cho Techfood (“thống kê”).
        </Text>
        <Text>
          2. Sau khi gửi thống kê cho người bán, Techfood tiến hành cấn trừ vào
          số dư tài khoản Techfood của người bán số tiền phí dịch vụ giảm chi
          phí vận chuyển tạm tính trong tuần.
        </Text>
        <Titlelsv2>5. Thanh toán phí dịch vụ</Titlelsv2>
        <Text>
          5.1. Người bán đồng ý và uỷ quyền không huỷ ngang vô điều kiện cho
          Techfood được toàn quyền cấn trừ phí dịch vụ giảm chi phí vận chuyển
          vào các khoản tiền của người bán trong tài khoản đảm bảo Techfood, số
          dư tài khoản Techfood, các khoản đặt cọc của người bán, hoặc bất kỳ
          khoản tiền nào mà Techfood giữ thay cho người bán theo từng thời kỳ
          vào bất kỳ lúc nào mà không cần chấp thuận của người bán. Techfood có
          toàn quyền phong tỏa tài khoản Techfood của người bán (bao gồm cả tài
          khoản đảm bảo Techfood hoặc số dư tài khoản Techfood của người bán )
          mà không cần thông báo trước trong trường hợp tài khoản đảm bảo
          Techfood hoặc số dư tài khoản Techfood của người bán không đủ để thanh
          toán phí dịch vụ giảm chi phí vận chuyển.
        </Text>
        <Text>
          5.2. Đặt cọc A. Người bán đặt cọc cho Techfood khoản tiền tương đương
          mức phí tối thiểu trước khi sử dụng dịch vụ giảm chi phí vận chuyển.
          B. Techfood có toàn quyền không cung cấp dịch vụ cho người bán, trong
          trường hợp người bán không thanh toán đủ tiền đặt cọc theo quy định.
          C. Khi kết thúc giai đoạn tính phí: 1. Nếu phí dịch vụ giảm chi phí
          vận chuyển phải trả cao hơn phí tối thiểu, Techfood sẽ hoàn lại toàn
          bộ tiền đặt cọc cho người bán qua số dư tài khoản Techfood. 2. Nếu phí
          dịch vụ giảm chi phí vận chuyển phải trả thấp hơn phí tối thiểu, khoản
          đặt cọc của người bán theo khoản này ngay lập tức được sử dụng để
          thanh toán cho dịch vụ giảm chi phí vận chuyển trong giai đoạn tính
          phí. Techfood sẽ hoàn trả các khoản phí dịch vụ giảm chi phí vận
          chuyển đã tạm thu ngoài khoản đặt cọc.
        </Text>
        <Text>
          5.3. Nếu bạn chọn mua dịch vụ giảm chi phí vận chuyển, bạn đồng ý
          thanh toán các khoản phí dịch vụ giảm chi phí vận chuyển theo quy định
          của Techfood. Trừ khi được quy định khác đi ở điều khoản sử dụng dịch
          vụ giảm chi phí vận chuyển có liên quan, bạn không được hủy đặt hàng
          và/hoặc yêu cầu hoàn phí sau khi đã chọn mua dịch vụ giảm chi phí vận
          chuyển và hoàn tất quy trình thanh toán phí dịch vụ giảm chi phí vận
          chuyển. Trừ khi được quy định khác đi trong điều khoản sử dụng dịch vụ
          giảm chi phí vận chuyển, phí dịch vụ giảm chi phí vận chuyển được mua
          ở sàn giao dịch thương mại điện tử Techfood chưa bao gồm thuế gtgt.
          Người bán có thể yêu cầu hóa đơn thuế đối với dịch vụ giảm chi phí vận
          chuyển cho từng tháng sau ngày 10 của tháng tiếp theo.
        </Text>
        <Text>
          5.4. Bạn sẽ không được chuyển dịch vụ giảm chi phí vận chuyển đã mua
          sang tài khoản người bán khác. Các khoản phí đã thanh toán sẽ không
          được hoàn lại.
        </Text>
        <Text>
          5.5. Các hàng hóa được đăng bán ở sàn giao dịch thương mại điện tử
          Techfood phải tuân thủ các quy định pháp luật có liên quan, điều khoản
          sử dụng dịch vụ giảm chi phí vận chuyển, điều khoản dịch vụ, và chính
          sách cấm/hạn chế sản phẩm. Bạn hiểu và đồng ý rằng Techfood có quyền
          lập tức phong tỏa hoặc xử lý bất kỳ người bán nào vi phạm bất kỳ quy
          định nào trong các điều khoản sử dụng dịch vụ giảm chi phí vận chuyển,
          điều khoản dịch vụ và chính sách cấm/hạn chế sản phẩm và bất kỳ khoản
          phí dịch vụ giảm chi phí vận chuyển nào đã thanh toán sẽ không được
          hoàn lại. Techfood cũng sẽ không có nghĩa vụ bồi thường bất kỳ thiệt
          hại nào liên quan đến các tài khoản người bán bị phong tỏa hoặc bị xử
          lý theo chính sách của Techfood.
        </Text>
        <Titlelsv2>
          6. Bạn hiểu và đồng ý rằng Techfood không bảo đảm hoặc cam kết về việc
          tăng số lượng người truy cập hoặc doanh số của sản phẩm có dịch vụ
          giảm chi phí vận chuyển.
        </Titlelsv2>
        <Titlelsv2>
          7. Chúng tôi khuyến cáo người bán chỉ mua dịch vụ giảm chi phí vận
          chuyển sau khi đã cân nhắc thấu đáo ngân sách cũng như các mục tiêu sử
          dụng dịch vụ giảm chi phí vận chuyển. Trừ khi được quy định khác đi
          trong điều khoản sử dụng hoặc điều khoản sử dụng dịch vụ giảm chi phí
          vận chuyển, Techfood sẽ không chịu trách nhiệm bồi thường hoặc bất kỳ
          trách nhiệm nào (bao gồm nhưng không giới hạn ở các chi phí thực tế
          hoặc tổn thất về doanh thu) đối với kết quả hoặc hiệu quả kỳ vọng của
          bất kỳ dịch vụ giảm chi phí vận chuyển nào.
        </Titlelsv2>
        <Titlelsv2>
          8. Bất kể các điều khoản và điều kiện bên trên, nếu Techfood, theo
          phán quyết của tòa án có thẩm quyền, phải chịu trách nhiệm (bao gồm
          trách nhiệm đối với lỗi vô tình) liên quan đến dịch vụ giảm chi phí
          vận chuyển, thì, trong chừng mực pháp luật cho phép, trách nhiệm của
          Techfood đối với bạn hoặc bất kỳ bên thứ ba nào sẽ chỉ giới hạn ở
          khoản tiền mà bạn đã thanh toán cho dịch vụ giảm chi phí vận chuyển có
          liên quan.
        </Titlelsv2>
      </Center>
      <Footer t={t}></Footer>
    </div>
  );
}
