# AMÉRYS Phu Quoc — The Stamp Playbook (v1)

Trang hướng dẫn tham gia các trạm trong Togetherness Passport. Public, không cần đăng nhập, không cần build.

```
index.html      # trang (HTML + CSS + JS) — hiếm khi cần sửa
content.json    # TOÀN BỘ nội dung: chữ, bước, địa điểm, ảnh, màu
images/         # ảnh từng trạm: tram-01.jpg … tram-08.jpg
```

---

## Cách 1 — Sửa ngay trên trang (khuyên dùng cho team marketing)

1. Mở trang đã deploy, thêm **`#edit`** vào cuối URL:
   `https://ten-trang.vercel.app/#edit`
2. Viền cam hiện lên → mọi dòng chữ bấm vào là sửa được, ngay trên máy tính hoặc điện thoại.
   - **Thêm / xoá / đổi thứ tự trạm**: ở trang danh sách 08 trạm.
   - **Thêm / xoá bước**: trong từng trạm.
   - **Ảnh, màu, biểu tượng, nhãn tab**: hộp nét đứt ở đầu mỗi trạm.
   - **Màu thương hiệu**: 5 ô màu ở thanh dưới cùng.
3. Bấm **Tải content.json** → được file mới.
4. Vào GitHub → thư mục repo → upload đè file `content.json` (Add file → Upload files → Commit).
   Vercel tự deploy lại sau ~20 giây.

Bản nháp tự lưu trên máy bạn, chưa ai thấy cho đến khi bạn upload `content.json`.
**Hoàn tác về bản đã đăng** để bỏ nháp. **Xem thử** để xem như khách.

> Không có mật khẩu — `#edit` chỉ sửa trên máy người đó, không ghi được lên máy chủ. Khách vô tình mở cũng không ảnh hưởng gì.

## Cách 2 — Sửa trực tiếp file content.json

Mở `content.json` trên GitHub, bấm ✏️, sửa phần trong dấu ngoặc kép, Commit. Cấu trúc:

- `theme` — màu thương hiệu (navy, teal, aqua, sand, terra, paper)
- `hero` — chữ trang giới thiệu: `titleTop`, `titleBottom`, `vi`, `en`, `cta`, `stats`, `steps`, `note`
- `stations[]` — từng trạm: `tab` (nhãn tab), `vi`/`en` (tên), `tVi`/`tEn` (tagline),
  `steps` (các bước, mỗi bước có `vi` và `en`), `locVi`/`locEn`/`locShort`,
  `image`, `color`, `icon`

Lưu ý: giữ nguyên dấu phẩy, ngoặc kép và ngoặc vuông. Thiếu một dấu là trang không đọc được nội dung
(khi đó trang tự dùng bản dự phòng nhúng trong `index.html`).

## Ảnh từng trạm

Upload vào `images/` rồi ghi tên file vào ô Ảnh (hoặc `image` trong JSON).

| File | Trạm |
|---|---|
| `images/tram-01.jpg` | Nhà mình say hi (check-in MXH) |
| `images/tram-02.jpg` | Sunset Together |
| `images/tram-03.jpg` | Thách thức danh hoạ |
| `images/tram-04.jpg` | Cuộc đua đầy cát |
| `images/tram-05.jpg` | "Master" chén (bữa sáng) |
| `images/tram-06.jpg` | Ký ức vui vẻ (đánh giá) |
| `images/tram-07.jpg` | "Dear" đi chờ chi (bưu thiếp) |
| `images/tram-08.jpg` | Ơn giời, spa đây rồi |

1200×800px, JPG, dưới 300KB. Thiếu ảnh nào thì trạm đó hiện nền xanh nhạt — không lỗi.

## Deploy lên Vercel

1. Tạo repo GitHub mới, upload `index.html`, `content.json`, thư mục `images/`.
2. Vercel → **Add New… → Project** → chọn repo.
3. Framework Preset: **Other**. Build Command: để trống. Output Directory: `./`.
4. **Deploy** → lấy URL để tạo mã QR in lên passport.

## Link trực tiếp

- `.../#tram` → danh sách tất cả trạm
- `.../#tram-03` → mở thẳng trạm 03 (in QR riêng cho từng trạm)
- `.../#edit` → chế độ soạn thảo
