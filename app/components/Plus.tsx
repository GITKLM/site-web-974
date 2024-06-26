import React from 'react'
import Bounded from './Bounded'
import OffresCard from './OffresCard'

export default function Plus() {
  return (
<Bounded>
    <h3 className='text-center text-3xl font-bold md:text-4xl pb-6'>Compris dans toutes nos offres</h3>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 mt-16'>
    <OffresCard
            title="Conception personnalisée" 
            description="Chaque design est unique et spécialement conçu pour répondre aux attentes spécifiques de chaque client." 
            imageSrc="/plus/conception.jpg" 
          />
    <OffresCard
            title="Adapté à tout support" 
            description="Design optimisé pour s'adapter à tous les appareils: téléphone, tablette et ordinateur" 
            imageSrc="/plus/responsive.jpg" 
          />
    <OffresCard
            title="Stratégie référencement" 
            description="Améliorer la visibilité de vos produits sur les moteurs de recherche, un meilleur référencement naturel sans frais supplémentaire." 
            imageSrc="/plus/SEO.jpg" 
          />

    <OffresCard
            title="Maquette de votre Site" 
            description="Nous vous proposons d'heberger vos sites chez nous et de vous fournir le nom de domaine"
            // PRIX A RAJOUTER
            imageSrc="/plus/strategieSEO2.jpg" 
          />
    <OffresCard
            title="Site sécurisé" 
            description="Utilisation de HTTPS, mise à jour régulière des logiciels, sécurité des utilisateurs, on évite l'utilisation de CMS comme Wordpress" 
            imageSrc="/plus/security.jpg" 
          />
    <OffresCard
            title="Dossier Kap Numerik" 
            description="Donnez-nous les informations et on s'occupe de transmettre votre dossier auprès des services régionaux" 
            imageSrc="../le-kap-numerik.jpg"
          />
          </div>
    <h3 className='text-center text-3xl font-bold md:text-4xl pb-6'>Selon vos envies</h3>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 mt-16'>
    <OffresCard
            title="Réparer/améliorer un site" 
            description="Définir ensemble une vraie stratégie SEO, pour un site avec un meilleur référencement naturel" 
            imageSrc="/plus/strategieSEO2.jpg" 
          />
    <OffresCard
            title="hébergement site" 
            description="Nous vous proposons d'heberger vos sites chez nous et de vous fournir le nom de domaine"
            // PRIX A RAJOUTER
            imageSrc="/plus/webhost.jpg" 
          />
    <OffresCard
            title="Création de logo" 
            description="Donnez-nous les informations et on s'occupe de transmettre votre dossier auprès des services régionaux" 
            imageSrc="/plus/creation.jpg"
          />
          </div>
</Bounded>
  )
}
