import Link from "next/link";

export default function Header() {
    return (
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Gallery App
          </Link>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/gallery" className="hover:text-gray-600">
                  Browse
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
  