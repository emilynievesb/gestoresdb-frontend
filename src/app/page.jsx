'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

export default function HomePage() {
    const router = useRouter();

    const navigateToAuth = () => {
        router.push('/auth');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-6">
            <h1 className="text-4xl font-bold mb-4">Bienvenido a la Plataforma de Tableros</h1>
            <p className="text-gray-600 mb-8">Accede a tus tableros o busca contenido, inicia sesión para comenzar.</p>

            <div className="flex justify-center">
                <Button onClick={navigateToAuth} className="flex items-center p-4 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
                    <LogIn className="mr-2" />
                    Iniciar Sesión
                </Button>
            </div>
        </div>
    );
}
