'use client';

import Modal from '@/app/components/Modal';
import Link from 'next/link';
import { useState } from 'react';

const ModalPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='p-10 text-center'>
      <h1 className='text-4xl mb-4'>
        Ejemplo de Modal con Next.js y TypeScript
      </h1>
      <button
        className='bg-blue-500 text-white px-4 py-2 mb-8 rounded-md'
        onClick={openModal}
      >
        Abrir Modal
      </button>
      <br />
      <Link href='/'>Regresar</Link>

      <Modal isOpen={isModalOpen} onClose={closeModal} title='Título del Modal'>
        <p>Este es un ejemplo de contenido dentro del modal.</p>
      </Modal>
    </div>
  );
};

export default ModalPage;
