import {
  Search,
  Twitter,
  Youtube,
  Package,
  Home,
  ShoppingCart,
  Users,
  LineChart,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";
import { openPopup } from "../Features/popupslice";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import ImageUploadPopup from "@/components/Upload";

const nfts = [
  { id: "#3367", image: "/placeholder.svg?height=400&width=400" },
  { id: "#4234", image: "/placeholder.svg?height=400&width=400" },
  { id: "#5242", image: "/placeholder.svg?height=400&width=400" },
  { id: "#6486", image: "/placeholder.svg?height=400&width=400" },
  { id: "#7682", image: "/placeholder.svg?height=400&width=400" },
  { id: "#8824", image: "/placeholder.svg?height=400&width=400" },
  { id: "#7463", image: "/placeholder.svg?height=400&width=400" },
  { id: "#2461", image: "/placeholder.svg?height=400&width=400" },
];

export default function Component() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.popup);
  const handleOpenPopup = () => {
    console.log("djdj");
    dispatch(openPopup());
  };
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      {isOpen ? <ImageUploadPopup /> : ""}
      <div className="hidden border-r bg-gray-100/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" to="#">
              <Package className="h-6 w-6" />
              <span className="">Pixxsha</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                to="#"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
              >
                <ShoppingCart className="h-4 w-4" />
                Gallery
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all"
                href="#"
              >
                <Package className="h-4 w-4" />
                World
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
              >
                <Users className="h-4 w-4" />
                Merchtap
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                href="#"
              >
                <LineChart className="h-4 w-4" />
                Buy
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <Link href="#">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#">
              <Youtube className="h-5 w-5" />
            </Link>
            <Button
              className="bg-black text-white rounded-none hover:bg-gray-800"
              size="sm"
              onClick={handleOpenPopup}
            >
              Upload Image
            </Button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="space-x-2">
              <Button className="bg-black text-white rounded-none hover:bg-gray-800">
                OATS
              </Button>
              <Button
                variant="outline"
                className="text-gray-500 rounded-none hover:bg-gray-100"
              >
                BEANZ
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  className="pl-8 rounded-none"
                  placeholder="Search by Serial..."
                  type="search"
                />
              </div>
              <Button variant="outline" size="icon" className="rounded-none">
                <MenuIcon className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nfts.map((nft) => (
              <Card
                key={nft.id}
                className="rounded-none border-none shadow-none"
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <img
                      alt={`NFT ${nft.id}`}
                      src={nft.image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-sm font-medium">OATS {nft.id}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
