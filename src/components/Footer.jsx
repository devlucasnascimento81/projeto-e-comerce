import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'


export default function Footer() {
    return (
        <footer className="bg-linear-to-r from-pink-400 to-pink-900 text-white mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Sobre */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Pink Planet</h3>
                        <p className="text-pink-100">
                            Sua loja de cosméticos online com os melhores produtos para realçar sua beleza.
                        </p>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contato</h3>
                        <div className="space-y-3 text-pink-100">
                            <div className="flex items-center gap-2">
                                <HiMail className="text-xl" />
                                <span>contato@pinkplanet.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <HiPhone className="text-xl" />
                                <span>(11) 99999-9999</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <HiLocationMarker className="text-xl" />
                                <span>São Paulo, SP</span>
                            </div>
                        </div>
                    </div>

                    {/* Redes Sociais */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all">
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-all">
                                <FaWhatsapp className="text-2xl" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-pink-500 mt-8 pt-8 text-center text-pink-100">
                    <p>&copy; 2024 Pink Planet. Todos os direitos reservados.</p>
                </div>

            </div>


        </footer>
    )
}