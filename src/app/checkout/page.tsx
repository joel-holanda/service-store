'use client'

import Menu from '@/components/Menu/Menu'
import { useState, ChangeEvent, FormEvent } from 'react'

interface CheckoutForm {
  nome: string
  telefone: string
  bairro: string
  pagamento: string
}

export default function CheckoutPage() {
  const [form, setForm] = useState<CheckoutForm>({
    nome: '',
    telefone: '',
    bairro: '',
    pagamento: ''
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Dados do checkout:', form)
    alert('Pedido enviado com sucesso!')
  }

  return (
    <div className='min-h-screen'>
      <Menu />
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-red-600">
            Finalizar Pedido
          </h2>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bairro</label>
              <input
                type="text"
                name="bairro"
                value={form.bairro}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Forma de pagamento
              </label>
              <select
                name="pagamento"
                value={form.pagamento}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-400"
                required
              >
                <option value="">Selecione</option>
                <option value="dinheiro">Dinheiro</option>
                <option value="cartao">Cartão</option>
                <option value="pix">Pix</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
          >
            Enviar Pedido
          </button>
        </form>
      </div>
    </div>
  )
}
