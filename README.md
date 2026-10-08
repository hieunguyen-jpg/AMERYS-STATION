# AMÉRYS Phu Quoc — The Stamp Playbook · Cẩm nang săn tem

Trang hướng dẫn tham gia 8 trạm trong Togetherness Passport. Trang tĩnh: không cần đăng nhập, không cần build.

```
index.html            Trang (HTML + CSS + JS), hiếm khi cần sửa
content.json          TOÀN BỘ nội dung: chữ, bước, địa điểm, đường dẫn ảnh, màu
vercel.json           Cấu hình Vercel (đường dẫn gọn, cache)
assets/
  logo-amerys.svg         Logo thanh trên cùng (sóng + AMÉRYS + PHU QUOC)
  logo-amerys-pph.svg     Logo chân trang (Managed by Private Palace Hotels)
  brand-wave.svg          Nét sóng trong logo (bản gốc để tham khảo)
  brand-pattern.svg       Pattern nhiều sóng (bản gốc để tham khảo)
  fonts/                  Font thương hiệu (đã nén woff2, đủ dấu tiếng Việt):
                          SVN-Graphik Thin/Regular/Medium/Semibold — tiêu đề & chữ chính
                          SVN-Adobe Caslon Bold — câu tagline mỗi trạm
                          SVN-Adobe Caslon SemiBold Italic — mọi dòng in nghiêng (tiếng Việt)
  favicon.svg, apple-touch-icon.png, og-image.png
images/               Ảnh địa điểm + ảnh phần thưởng. Xem images/README.txt
```

## Deploy lên Vercel

1. Tạo repo GitHub mới, upload **toàn bộ nội dung thư mục này** (index.html, content.json, vercel.json, assets/, images/).
2. Vercel → **Add New… → Project** → chọn repo.
3. Framework Preset: **Other**. Build Command: để trống. Output Directory: để trống (hoặc `./`).
4. **Deploy** → lấy URL để tạo mã QR in lên passport.

Mọi lần upload/commit sau lên GitHub, Vercel tự deploy lại sau khoảng 20 giây.

## Gắn tên miền riêng

1. Vercel → mở project → **Settings → Domains** → nhập tên miền (vd: `playbook.amerys.com`) → **Add**.
2. Vercel hiện bản ghi DNS cần tạo. Vào nơi quản lý tên miền (PA Vietnam, Mắt Bão, GoDaddy, Cloudflare…):
   - Tên miền phụ (vd `playbook.amerys.com`): tạo bản ghi **CNAME**, tên `playbook`, giá trị như Vercel hiển thị (thường là `cname.vercel-dns.com`).
   - Tên miền chính (vd `amerys.com`): tạo bản ghi **A**, tên `@`, giá trị như Vercel hiển thị (thường là `76.76.21.21`).
3. Chờ 5–30 phút (có khi đến vài giờ). Vercel tự cấp HTTPS khi tên miền báo "Valid Configuration".
4. Sau khi có tên miền: mở `index.html`, tìm dòng `og:image` và đổi `assets/og-image.png` thành đường dẫn đầy đủ,
   vd `https://playbook.amerys.com/assets/og-image.png`, để ảnh xem trước hiện đúng khi chia sẻ link qua Zalo, Facebook.
5. Tạo mã QR từ tên miền mới (không dùng link `.vercel.app`) để in lên passport.

## Thêm ảnh

Thả ảnh vào `images/` **đúng tên file** trong `images/README.txt`, rồi upload lên GitHub.
Ảnh nào chưa có thì trang hiện khung trống nền xanh nhạt, không lỗi.

## Sửa nội dung

**Cách 1: sửa ngay trên trang.** Mở `https://ten-trang.vercel.app/#edit`, bấm vào chữ để sửa,
bấm **Tải content.json**, rồi upload đè file `content.json` lên GitHub.
Bản nháp chỉ lưu trên máy bạn cho đến khi upload. Không ai khác thấy.

**Cách 2: sửa file `content.json`.** Mở trên GitHub, bấm ✏️, sửa phần trong dấu ngoặc kép, Commit.
Giữ nguyên dấu phẩy, ngoặc kép, ngoặc vuông. Nếu file lỗi cú pháp, trang tự dùng bản dự phòng trong `index.html`.

Các nhóm chính trong `content.json`:

- `brand`: tên, đường dẫn logo (`logo`, `logoFull`), chữ "Togetherness Passport"
- `hero`: trang đầu (`titleTop`, `titleBottom`, `en`, `vi`, `cta`, `ctaSub`).
  Trong `en`/`vi`, ký hiệu `\n` là xuống dòng.
- `stations[]`: từng trạm: `tab`, `vi`/`en` (tên), `tEn`/`tVi`, `steps`, `locVi`/`locEn`, `photo`, `icon`, `color`
- `ui`: các nhãn giao diện (nút, tiêu đề danh sách, "See your rewards"…)
- `rewards`: trang phần thưởng

Quy ước song ngữ: **tiếng Anh trước, tiếng Việt sau (in nghiêng)**.

## Link trực tiếp (in QR riêng)

- `/#tram`: danh sách 8 trạm
- `/#tram-03`: mở thẳng trạm 03
- `/#qua`: trang phần thưởng
- `/#edit`: chế độ soạn thảo
