export type SideItem = {
  label: string;
  href?: string;
  badge?: number;
  isNew?: boolean;
};

export const topNav = [
  "Phòng QLĐT",
  "Phòng CTCTSV",
  "Email và tài khoản Teams",
  "Giới thiệu",
  "Kế hoạch & Lịch học",
  "Đăng ký học phần",
  "Thực tập & Tốt nghiệp",
  "Thư viện FTU",
  "Nhập học trực tuyến",
  "Tin tức",
];

export const MODEL_HREF = "/dat-cho-toa-d";
export const BOOKING_HREF = "/dang-ky-cabin";

export const sideNav: SideItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Hỗ trợ sinh viên trực tuyến" },
  { label: "Thông báo từ ban quản trị", badge: 1 },
  { label: "Xem chương trình đào tạo" },
  { label: "Xem môn học tiên quyết" },
  { label: "Đăng ký môn tự chọn định hướng" },
  { label: "Thống kê môn TCDH theo nhóm" },
  { label: "Đăng ký môn học" },
  { label: "Xem học phí" },
  { label: "Đóng học phí" },
  { label: "Thời khóa biểu dạng tuần" },
  { label: "Thời khóa biểu dạng học kỳ" },
  { label: "Xem lịch thi" },
  { label: "Xem điểm" },
  { label: "Hoạt động rèn luyện sinh viên" },
  { label: "Đánh giá kết quả rèn luyện" },
  { label: "Khảo sát đánh giá" },
  { label: "Cập nhật thông tin lý lịch" },
  { label: "Đăng ký phòng chức năng" },
  { label: "Đăng ký chỗ ngồi Cabin Tòa D", href: BOOKING_HREF, isNew: true },
  { label: "Mô hình 3D Cabin Tòa D", href: MODEL_HREF, isNew: true },
  { label: "Đăng ký thực tập/khóa luận tốt nghiệp" },
];
