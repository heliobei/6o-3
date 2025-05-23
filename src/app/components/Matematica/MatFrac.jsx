import React from 'react'
import ReactPlayer from 'react-player'

function MatFrac() {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto m-4'>
            <div className="attention-box mt-16 mx-8 text-slate-800 text-center text-lg border-2 border-primary rounded-lg p-8">
              <h1 className="text-4xl font-semibold text-slate-700 mb-4">Atividades Extras</h1>
                <p>
                    Acesse as <a href="https://exerciciosextras6o.beieducacaopedagogico.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-purple-800"> atividades extras</a>{' '}que vão além do conteúdo presente nos livros físicos. Aqui você poderá acessar e baixar PDFs com atividades para cada capítulo, dando um passo além no ensino de habilidades matemáticas.
                </p>
                
              </div>

                <div className='mx-auto p-4'>
                    <h1 className='font-bold text-3xl py-4 text-center text-slate-700'>Frações </h1>
                    <p className='text-slate-700 py-4'>As frações estão muito presentes no nosso dia a dia e para introduzir esse assunto trouxemos dois vídeos: o primeiro mais curto, do canal curtas matemáticos traz um pouco de história das frações e os conceitos mais básicos, ideal para uma introdução ao tema. O segundo, do canal Futura, comenta sobre a definição e conceito de frações, mas complementa com características e tipos de frações. </p>
                </div>
                
                <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
                    
                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/baJ2jp3_ZHE' width="100%" />
                    </div>
                    <p className='text-center text-slate-700 font-bold p-4'>Frações: Definição e Características</p>
                    
                    </div>

                    <div className="w-full lg:w-1/2">
                    <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                        <ReactPlayer url='https://youtu.be/LP8GZ1E9I5o' width="100%" />
                    </div>
                    <p className='text-center text-slate-700 font-bold p-4'>Frações: conceitos</p>
                    
                    </div>

                </div>

        </div>
        </div>
      )
    }

export default MatFrac