
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

const page = async ({params: { lang }} : {params: { lang: Locale }}) => {

    const { secondpage } = await getDictionary(lang)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1 className='text-6xl font-bold text-green-600'>{secondpage.title}</h1>
    </main>
  )
}

export default page