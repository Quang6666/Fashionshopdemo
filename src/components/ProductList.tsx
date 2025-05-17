import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageType } from "./NavigationBar";

const demoProducts = [
	{
		name: "Áo khoác lông vũ",
		price: "1.200.000₫",
		img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Áo len cổ lọ",
		price: "650.000₫",
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Quần jeans dày",
		price: "800.000₫",
		img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Mũ len thời trang",
		price: "250.000₫",
		img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Găng tay giữ nhiệt",
		price: "180.000₫",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Khăn choàng cổ",
		price: "320.000₫",
		img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Áo hoodie nỉ dày",
		price: "900.000₫",
		img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Áo khoác bomber",
		price: "1.050.000₫",
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Áo dạ dáng dài",
		price: "1.500.000₫",
		img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Quần legging giữ nhiệt",
		price: "400.000₫",
		img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Áo gile lông cừu",
		price: "700.000₫",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Tất len cao cổ",
		price: "120.000₫",
		img: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Bốt da nữ",
		price: "1.300.000₫",
		img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Áo phao dáng ngắn",
		price: "1.100.000₫",
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Khẩu trang lông",
		price: "90.000₫",
		img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Túi xách len",
		price: "350.000₫",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
];

const productListText: Record<LanguageType, {
  back: string;
  title: string;
  searchPlaceholder: string;
  notFound: string;
  detail: string;
  price: string;
  paginationPrev: string;
  paginationNext: string;
  footer: {
    brand: string;
    desc: string;
    quickLinks: string;
    home: string;
    products: string;
    sale: string;
    contact: string;
    subscribe: string;
    emailPlaceholder: string;
    subscribeBtn: string;
    copyright: string;
  };
}> = {
  vi: {
    back: "← Trang chủ",
    title: "Danh sách sản phẩm",
    searchPlaceholder: "Tìm kiếm sản phẩm...",
    notFound: "Không tìm thấy sản phẩm phù hợp.",
    detail: "Xem chi tiết",
    price: "Giá",
    paginationPrev: "<",
    paginationNext: ">",
    footer: {
      brand: "Snow Fashion Store",
      desc: "Đem đến cho bạn trải nghiệm mua sắm mùa đông đẳng cấp với các sản phẩm thời trang ấm áp, hiện đại và phong cách. Cảm hứng từ tuyết trắng và sắc xanh lạnh, chúng tôi luôn cập nhật xu hướng mới nhất.",
      quickLinks: "Liên kết nhanh",
      home: "Trang chủ",
      products: "Sản phẩm",
      sale: "Khuyến mãi",
      contact: "Liên hệ",
      subscribe: "Nhận ưu đãi & tin mới",
      emailPlaceholder: "Nhập email của bạn",
      subscribeBtn: "Đăng ký",
      copyright: `© ${new Date().getFullYear()} Snow Fashion Store. Thiết kế bởi đội ngũ cảm hứng từ mùa đông & tuyết trắng.`
    }
  },
  en: {
    back: "← Home",
    title: "Product List",
    searchPlaceholder: "Search products...",
    notFound: "No matching products found.",
    detail: "View details",
    price: "Price",
    paginationPrev: "<",
    paginationNext: ">",
    footer: {
      brand: "Snow Fashion Store",
      desc: "Experience premium winter shopping with warm, modern, and stylish fashion. Inspired by white snow and cool blue, we always update the latest trends.",
      quickLinks: "Quick Links",
      home: "Home",
      products: "Products",
      sale: "Sale",
      contact: "Contact",
      subscribe: "Get offers & news",
      emailPlaceholder: "Enter your email",
      subscribeBtn: "Subscribe",
      copyright: `© ${new Date().getFullYear()} Snow Fashion Store. Designed by a team inspired by winter & snow.`
    }
  }
};

export default function ProductList({ language }: { language: LanguageType }) {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	const pageSize = 9;
	const filtered = demoProducts.filter((p) =>
		p.name.toLowerCase().includes(search.toLowerCase())
	);
	const totalPages = Math.ceil(filtered.length / pageSize);
	const pagedProducts = filtered.slice((page - 1) * pageSize, page * pageSize);

	// Reset về trang 1 khi search thay đổi
	React.useEffect(() => {
		setPage(1);
	}, [search]);

	return (
		<div className="min-h-screen flex flex-col">
			{/* Nội dung chính */}
			<div className="flex-1 w-full flex flex-col items-center justify-start pt-28 pb-4 relative">
				{/* Nút quay lại trang chủ */}
				<button
					onClick={() => navigate("/")}
					className="fixed top-24 left-7 z-40 bg-white/85 text-[#233658] text-lg font-bold tracking-wide px-6 py-2 rounded-lg shadow border border-[#ffe5c8] hover:bg-[#fead62] hover:text-white/95 hover:scale-105 transition-all duration-200"
					style={{ boxShadow: "0 2px 12px #a6c6fb55" }}
				>
					{productListText[language].back}
				</button>
				<h1 className="text-3xl md:text-4xl font-bold text-center text-zinc-100 drop-shadow-lg mb-8">
					{productListText[language].title}
				</h1>
				<div className="w-full max-w-xl mb-8">
					<input
						type="text"
						placeholder={productListText[language].searchPlaceholder}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full px-5 py-3 rounded-xl border border-sky-200 bg-white/80 text-slate-800 text-lg shadow focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
					/>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 w-full max-w-5xl px-2">
					{pagedProducts.length === 0 ? (
						<div className="col-span-full text-center text-sky-200 text-lg">
							{productListText[language].notFound}
						</div>
					) : (
						pagedProducts.map((sp, i) => (
							<div
								key={i + (page - 1) * pageSize}
								className="bg-white/80 dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-4 flex flex-col items-center transition hover:scale-105 hover:shadow-2xl cursor-pointer"
							>
								<img
									src={sp.img}
									alt={sp.name}
									className="w-32 h-32 object-cover rounded-xl mb-3 shadow"
									loading="lazy"
								/>
								<div className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-1 text-center">
									{sp.name}
								</div>
								<div className="text-sky-600 dark:text-sky-300 font-bold text-base mb-2">
									{sp.price}
								</div>
								<button className="mt-2 inline-block w-fit bg-white/85 text-[#233658] text-lg font-bold tracking-wide px-7 py-2 rounded-lg shadow hover:bg-[#fead62] hover:text-white/95 hover:scale-105 transition-all duration-200 border border-[#ffe5c8]">
									{productListText[language].detail}
								</button>
							</div>
						))
					)}
				</div>
				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex gap-2 mt-10">
						<button
							onClick={() => setPage((p) => Math.max(1, p - 1))}
							disabled={page === 1}
							className="px-4 py-2 rounded-lg font-bold bg-sky-200 text-sky-800 disabled:opacity-50 disabled:cursor-not-allowed shadow"
						>
							{productListText[language].paginationPrev}
						</button>
						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i}
								onClick={() => setPage(i + 1)}
								className={`px-4 py-2 rounded-lg font-bold shadow ${
									page === i + 1
										? "bg-[#233658] text-white"
										: "bg-white text-[#233658] hover:bg-sky-100"
								}`}
							>
								{i + 1}
							</button>
						))}
						<button
							onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
							disabled={page === totalPages}
							className="px-4 py-2 rounded-lg font-bold bg-sky-200 text-sky-800 disabled:opacity-50 disabled:cursor-not-allowed shadow"
						>
							{productListText[language].paginationNext}
						</button>
					</div>
				)}
			</div>
			{/* Footer */}
		</div>
	);
}
