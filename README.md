# Cabin 2.0 — Đặt chỗ Cabin Tòa D (FTU)

Bản demo đề xuất tích hợp chức năng **đặt chỗ cabin học tập ở Tòa D** vào cổng thông tin sinh viên FTU Gate. Dự án của nhóm 3 KAIZENZ.

> ⚠️ **Đây là bản demo, không phải hệ thống chính thức của Trường Đại học Ngoại thương.** Giao diện cổng thông tin được dựng lại chỉ để trình diễn chức năng mới nằm trong bối cảnh quen thuộc với sinh viên. Không có trang đăng nhập, không thu thập tài khoản hay dữ liệu cá nhân. Tên, MSSV trong dữ liệu mẫu đều là giả lập.

## Tính năng

| Trang | Đường dẫn | Mô tả |
| --- | --- | --- |
| Trang chủ | `/` | Giao diện cổng thông tin (header, menu trái, tin tức, thông báo) với 2 thẻ chức năng mới |
| Đăng ký chỗ ngồi Cabin Tòa D | `/dang-ky-cabin` | Lịch trống 3 cabin, đặt cabin nhóm hoặc ghế cá nhân, nhận mã QR mở cửa, chế độ "Quản lý nhà D", mô phỏng khóa cửa QR, quy định |
| Mô hình 3D Cabin Tòa D | `/dat-cho-toa-d` | Mô hình 3D (three.js) của 3 cabin: xoay, phóng to, cắt mái, xem mặt bằng, danh sách hạng mục cải tạo |

Cả hai chức năng đều có nút **Toàn màn hình**. Thoát bằng phím `Esc` hoặc nút "Thoát toàn màn hình".

### Quy định đặt chỗ (mô phỏng trong app)

- Mở cửa 08:00–20:00, thứ Hai đến thứ Sáu, mỗi ca 1 tiếng (ca cuối 17:00–20:00).
- Tối đa 4 tiếng liên tiếp cho một lượt đặt; cabin nhóm tối đa 2 lượt/tuần mỗi người.
- Cabin 1, 2 cho nhóm (cần MSSV người đại diện + ít nhất 1 thành viên); Cabin 3 có 7 ghế cá nhân.
- Quét QR ở cửa từ 5 phút trước giờ bắt đầu; quá 15 phút chưa quét thì lượt đặt tự hủy.

## Yêu cầu

- [Node.js](https://nodejs.org/) **24 trở lên** (kèm npm)
- Git

## Cách clone và chạy

```bash
# 1. Clone repo
git clone https://github.com/trungngo9207-commits/Cabin-2.0.git
cd Cabin-2.0

# 2. Cài thư viện
npm ci

# 3. Chạy bản phát triển
npm run dev
```

Mở trình duyệt tại **http://localhost:3000**.

Chưa có Node 24? Cài nhanh qua [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux):

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# mở terminal mới, rồi:
nvm install 24
```

Trên Windows dùng [nvm-windows](https://github.com/coreybutler/nvm-windows) hoặc tải bộ cài từ nodejs.org.

### Build bản production

```bash
npm run build   # build
npm start       # chạy bản đã build tại http://localhost:3000
```

### Chạy bằng Docker (tùy chọn)

```bash
docker compose up app --build   # bản production
docker compose up dev --build   # bản phát triển ở cổng 3001
```

### Kiểm tra code

```bash
npm run check   # lint + typecheck + build
```

## Cấu trúc dự án

```
public/sites/ftugate/
  dang-ky-cabin.html     # App đặt chỗ (HTML/CSS/JS thuần, lưu dữ liệu trong localStorage)
  cabin-toa-d.html       # Mô hình 3D (three.js r147 + OrbitControls, tải từ CDN)
src/
  app/
    page.tsx             # Trang chủ cổng thông tin
    dang-ky-cabin/       # Route nhúng app đặt chỗ
    dat-cho-toa-d/       # Route nhúng mô hình 3D
    layout.tsx, globals.css
  components/sites/ftugate/
    nav.ts               # Menu trên + menu trái (thêm/sửa mục ở đây)
    PortalShell.tsx      # Header, menu trái thu gọn được
    NewsSection.tsx      # Khối tin tức / thông báo
    EmbeddedApp.tsx      # Khung nhúng + nút toàn màn hình
```

## Chỉnh sửa

**App đặt chỗ và mô hình 3D** là hai file HTML độc lập trong `public/sites/ftugate/`. Bạn có thể mở trực tiếp bằng trình duyệt để sửa và xem nhanh, không cần chạy Next.js.

- Mô hình 3D được dựng bằng code three.js ngay trong `cabin-toa-d.html` (không dùng file `.glb`). Kích thước cabin, bàn ghế, màu sắc nằm trong phần `<script>`.
- Hằng số của app đặt chỗ (`SLOTS`, `CABINS`, `SEATS`, `MAX_H`, `LATE_MIN`, `WEEK_LIMIT`...) nằm đầu phần `<script>` của `dang-ky-cabin.html`.
- Cả hai file đặt `data-theme="light"` trên thẻ `<html>` để luôn hiển thị nền sáng cho hợp FTU Gate. Nếu thay bằng bản mới, nhớ giữ thuộc tính này.
- Dữ liệu đặt chỗ chỉ lưu trong trình duyệt của mỗi người (localStorage). Bấm **"Làm mới demo"** trong app để về dữ liệu mẫu.

**Thêm mục menu:** sửa `src/components/sites/ftugate/nav.ts`.

## Công nghệ

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, Lucide icons
- three.js r147 (mô hình 3D), qrcodejs (mã QR)

## Ghi công

- Khung dự án dựa trên [ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) (MIT).
- Thiết kế cabin, quy định đặt chỗ và mô hình 3D: nhóm 3 KAIZENZ.
- Logo, tên và nội dung tin tức của Trường Đại học Ngoại thương thuộc về nhà trường.

## Giấy phép

MIT — xem [LICENSE](LICENSE).
