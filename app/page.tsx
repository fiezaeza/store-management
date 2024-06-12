// import { useRouter } from "next/navigation";

import Link from "next/link";

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            <h1 className="text-4xl font-bold mb-4">Store Goods Management System</h1>
            <p className="text-lg text-white-700 mb-8">
                Manage your Store Goods efficiently and effortlessly with our simple and intuitive system.
            </p>
            <div>
              <Link href="/orders" className="btn btn-primary">
                Get Started
              </Link>
            </div>
        </div>
    );
};

export default HomePage;
