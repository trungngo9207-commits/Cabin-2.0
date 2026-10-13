import Link from "next/link";
import { ArrowRight, Box, CalendarCheck } from "lucide-react";
import { NewsSection } from "@/components/sites/ftugate/NewsSection";
import { NewBadge } from "@/components/sites/ftugate/NewBadge";
import { BOOKING_HREF, MODEL_HREF } from "@/components/sites/ftugate/nav";

const features = [
  {
    href: BOOKING_HREF,
    icon: CalendarCheck,
    title: "Đăng ký chỗ ngồi Container Tòa D",
    desc: "Xem lịch trống, đặt container nhóm hoặc ghế cá nhân và nhận mã QR mở cửa.",
  },
  {
    href: MODEL_HREF,
    icon: Box,
    title: "Mô hình 3D Container Tòa D",
    desc: "Xoay, cắt mái và xem mặt bằng 3 container trước khi đặt chỗ.",
  },
];

export default function Home() {
  return (
    <div className="space-y-6 px-4 py-4 lg:px-5">
      <div className="grid h-[180px] place-items-center rounded-lg bg-gradient-to-r from-[#f6e3e4] via-white to-[#f6e3e4]">
        <div className="rounded-md bg-white/90 px-6 py-3 text-center shadow">
          <h1 className="text-xl font-bold tracking-wide text-ftu">
            TRƯỜNG ĐẠI HỌC NGOẠI THƯƠNG
          </h1>
          <div className="text-sm tracking-[0.3em] text-[#555]">
            Foreign Trade University
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {features.map((f) => (
          <Link
            key={f.href}
            href={f.href}
            className="flex items-center gap-4 rounded-[9.6px] border-2 border-ftu bg-[#fdf3f3] p-4 hover:bg-[#f9e4e5]"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-ftu text-white">
              <f.icon className="size-6" />
            </span>
            <span className="flex-1">
              <span className="flex items-center gap-2 font-medium text-ftu">
                {f.title}
                <NewBadge />
              </span>
              <span className="text-sm text-[#555]">{f.desc}</span>
            </span>
            <ArrowRight className="size-5 text-ftu" />
          </Link>
        ))}
      </div>

      <NewsSection
        title="Tin tức"
        cards={[
          { tag: "65 NĂM FTU", title: "Chương trình tổng thể các hoạt động kỷ niệm 65 năm thành lập trường", date: "12/11/2025" },
          { tag: "THƯ MỜI", title: "Thư mời về dự Ngày hội trường 15/11/2025", date: "03/11/2025" },
        ]}
        lines={[
          { title: "Lễ trao bằng tốt nghiệp đợt 2 năm 2025", date: "14/09/2025" },
          { title: "Sứ mạng, tầm nhìn, các giá trị cốt lõi và chiến lược phát triển", date: "09/10/2019" },
        ]}
      />
      <NewsSection
        title="Thông báo"
        cards={[
          { tag: "THÔNG BÁO", title: "Phát và thu hồ sơ mở tài khoản cho sinh viên K65", date: "17/09/2026" },
          { tag: "THÔNG BÁO", title: "Thông báo lịch đăng ký tín chỉ bổ sung giai đoạn 2", date: "10/09/2026" },
        ]}
        lines={[
          { title: "Thông báo điều chỉnh thời gian đăng ký học tập học kỳ 1 năm học 2026-2027", date: "04/08/2026", isNew: true },
          { title: "Thông báo đánh giá rèn luyện cho sinh viên tốt nghiệp đợt tháng 7", date: "28/07/2026", isNew: true },
          { title: "Thông báo đăng ký chương trình đào tạo thứ hai năm học 2026-2027", date: "23/07/2026" },
        ]}
      />
      <NewsSection
        title="KẾ HOẠCH & LỊCH HỌC"
        cards={[
          { tag: "LỊCH HỌC", title: "Kế hoạch đăng ký học tập học kỳ hè 2026", date: "21/05/2026" },
          { tag: "QUAN TRỌNG", title: "Điều chỉnh thời gian đăng ký học phần", date: "08/05/2026" },
        ]}
      />
      <NewsSection
        title="BIỂU MẪU"
        cards={[
          { tag: "HƯỚNG DẪN", title: "Hướng dẫn đăng ký tín chỉ", date: "03/12/2025" },
          { tag: "BIỂU MẪU", title: "Các loại biểu mẫu cơ bản cho sinh viên đại học chính quy", date: "16/01/2022" },
        ]}
      />

      <footer className="border-t border-ftu pt-6 pb-8 text-sm text-[#555]">
        <p className="font-medium text-ftu">Container 2.0 · Dự án nhóm 3 KAIZENZ</p>
        <p className="mt-1">
          Bản demo đề xuất chức năng đặt chỗ Container Tòa D, dựng lại giao diện kiểu FTU Gate để
          trình diễn. Không phải hệ thống chính thức của Trường Đại học Ngoại thương; tin tức
          và dữ liệu sinh viên chỉ là ví dụ.
        </p>
      </footer>
    </div>
  );
}
