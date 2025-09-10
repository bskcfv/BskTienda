import Link from "next/link";
import Image from "next/image";

//Guardar Icono en una Variable
const Logo = '/logoLinux.svg'

export default function header(){
    return(
        <header className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
            <div className="flex items-center gap-3">
                <Image src={Logo} width={80} height={80} alt="logo_image" />
            </div>
            <nav className="flex gap-6 text-lg font-medium">
                <Link href={'/'} className="hover:text-gray-400 transition">Inicio</Link>
                <Link href={'/Hombre'} className="hover:text-gray-400 transition">Hombre</Link>
                <Link href={'/Mujer'} className="hover:text-gray-400 transition">Mujer</Link>
            </nav>
            <div className="flex gap-4">
                <Link href={'/Compras'}>
                    <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">Carrito Compras</button>
                </Link>
                <Link href={'/Login'}>
                    <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition">Log In</button>
                </Link>
            </div>
        </header>
    );
}