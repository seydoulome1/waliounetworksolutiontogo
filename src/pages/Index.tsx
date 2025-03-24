
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import ProposalSection from '../components/ProposalSection';
import ContactButton from '../components/ContactButton';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-blue-50 to-white pointer-events-none z-0"
        style={{ opacity, scale }}
      />
      
      <ContactButton phone1="+228 71303662" phone2="+228 91511366" />
      
      <div className="relative z-10">
        <Header date="24 mars 2025" />
        
        <ProposalSection
          number={1}
          title="Présentation de WNSTG"
          content={
            <div className="space-y-4">
              <p>
                Waliou Network Solution Togo (WNSTG) est une entreprise spécialisée dans la création de solutions numériques innovantes. Nous proposons des services sur-mesure, adaptés aux besoins de nos clients, pour garantir leur succès en ligne.
              </p>
              <p>
                Avec une équipe de développeurs expérimentés et dédiés, nous transformons vos idées en réalité.
              </p>
            </div>
          }
        />
        
        <ProposalSection
          number={2}
          title="Résumé de Votre Projet"
          content={
            <div className="space-y-4">
              <p>
                Depuis une semaine, nos développeurs travaillent sans relâche à la conception du nouveau site web pour ELVEC TOGO, accessible dès maintenant via le lien suivant : <a href="https://elvectogo.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://elvectogo.vercel.app/</a>
              </p>
              <p>
                Cette plateforme a été pensée pour répondre aux enjeux spécifiques de votre entreprise, en offrant :
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Une expérience utilisateur exceptionnelle grâce à un design moderne et une navigation intuitive.</li>
                <li>Des fonctionnalités avancées, telles que la réservation en ligne et un catalogue interactif.</li>
                <li>Une solution robuste et sécurisée, adaptée au marché togolais.</li>
              </ol>
            </div>
          }
        />
        
        <ProposalSection
          number={3}
          title="Avantages de Notre Service Comparés à l'Ancien Site"
          content={
            <div className="space-y-4">
              <p>
                Notre nouveau site pour ELVEC TOGO offre une expérience entièrement modernisée, répondant aux besoins actuels du marché, contrairement à l'ancien site qui présente plusieurs lacunes.
              </p>
              
              <div className="bg-secondary/30 rounded-xl p-5 my-6">
                <h4 className="font-semibold mb-3">Améliorations notables :</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 mr-3 flex-shrink-0">✓</span>
                    <span>Design professionnel et moderne avec navigation intuitive et fluide, contrairement à l'ancien site désorganisé avec des liens brisés.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 mr-3 flex-shrink-0">✓</span>
                    <span>Fonctionnalités innovantes comme la réservation en ligne et les formulaires sécurisés, surpassant les boutons non fonctionnels de l'ancien site.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 mr-3 flex-shrink-0">✓</span>
                    <span>Contenu rédigé professionnellement avec des spécifications techniques précises, à l'opposé des erreurs de l'ancien contenu.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 mr-3 flex-shrink-0">✓</span>
                    <span>Galerie HD valorisant les véhicules et projets, là où l'ancien site manquait d'images de qualité.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 mr-3 flex-shrink-0">✓</span>
                    <span>Hébergement ultra-performant avec certificat SSL et sauvegardes journalières, surpassant l'hébergement peu sécurisé du site actuel.</span>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        
        <ProposalSection
          number={4}
          title="Notre Offre Exceptionnelle"
          content={
            <div className="space-y-4">
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 flex flex-col md:flex-row justify-between items-center mb-6">
                <h4 className="text-xl font-semibold">Prix promotionnel</h4>
                <div className="text-3xl font-bold text-primary">90 000 FCFA</div>
              </div>
              
              <p>WNSTG propose :</p>
              
              <div className="space-y-4 mt-4">
                <div className="bg-white rounded-lg shadow-sm p-4 border border-border">
                  <h5 className="font-semibold mb-2">1. Site web entièrement personnalisé</h5>
                  <p className="text-muted-foreground">Design responsive, catalogue interactif, et réservation en ligne.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 border border-border">
                  <h5 className="font-semibold mb-2">2. Plan d'hébergement premium</h5>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Certificat SSL offert à vie.</li>
                    <li>• 300 Go d'espace disque SSD, trafic illimité, et sauvegardes journalières.</li>
                    <li>• Protection Whois gratuite.</li>
                    <li>• Hébergement ultra-performant sur 2 ans.</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 border border-border">
                  <h5 className="font-semibold mb-2">3. Adresses email professionnelles</h5>
                  <p className="text-muted-foreground">Création d'adresses email professionnelles illimitées, optimisées pour des communications efficaces.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 border border-border">
                  <h5 className="font-semibold mb-2">4. Outils marketing pour réseaux sociaux</h5>
                  <p className="text-muted-foreground">Maximisez votre visibilité sur Facebook, Instagram, et autres plateformes.</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 border border-border">
                  <h5 className="font-semibold mb-2">5. Assistance et support</h5>
                  <p className="text-muted-foreground">Assistance gratuite et support prioritaire pour garantir le succès de votre projet.</p>
                </div>
              </div>
            </div>
          }
        />
        
        <ProposalSection
          number={5}
          title="Impact Attendu pour ELVEC TOGO"
          content={
            <div className="space-y-4">
              <p>Grâce à notre proposition, ELVEC TOGO bénéficiera de :</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <div className="font-medium mb-2">Augmentation des réservations</div>
                  <p className="text-sm text-muted-foreground">Plus de clients pourront réserver facilement via votre site.</p>
                </div>
                
                <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <div className="font-medium mb-2">Crédibilité renforcée</div>
                  <p className="text-sm text-muted-foreground">Témoignages clients et preuves visuelles professionnelles.</p>
                </div>
                
                <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <div className="font-medium mb-2">Réduction des tâches administratives</div>
                  <p className="text-sm text-muted-foreground">Automatisation des processus de réservation et de suivi.</p>
                </div>
                
                <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-4 border border-border">
                  <div className="font-medium mb-2">Adaptation aux besoins locaux</div>
                  <p className="text-sm text-muted-foreground">Interface mobile optimisée et options de livraison précises.</p>
                </div>
                
                <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-4 border border-border col-span-1 md:col-span-2">
                  <div className="font-medium mb-2">Communication optimisée</div>
                  <p className="text-sm text-muted-foreground">Adresses email professionnelles illimitées pour une meilleure image de marque.</p>
                </div>
              </div>
            </div>
          }
        />
        
        <ProposalSection
          number={6}
          title="Appel à Action"
          content={
            <div className="space-y-4">
              <p>
                Nous sommes ravis de collaborer avec ELVEC TOGO pour donner vie à ce projet. Notre offre est limitée, et nous vous invitons à nous contacter dès aujourd'hui pour finaliser cette opportunité exclusive.
              </p>
              
              <div className="bg-primary/10 rounded-xl p-6 text-center my-6">
                <h4 className="font-semibold mb-4">Contactez-nous dès maintenant</h4>
                <div className="flex justify-center space-x-6">
                  <a href="tel:+22871303662" className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-primary font-medium">+228 71303662</span>
                  </a>
                  <a href="tel:+22891511366" className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-primary font-medium">+228 91511366</span>
                  </a>
                </div>
              </div>
            </div>
          }
        />
        
        <motion.div
          className="container max-w-4xl mx-auto px-6 py-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
          <p className="text-lg">
            Avec cette nouvelle plateforme, ELVEC TOGO disposera d'un outil numérique performant pour prospérer dans son secteur. Faites le choix de l'innovation et de la simplicité avec WNSTG !
          </p>
          
          <motion.div 
            className="mt-12 inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <a 
              href="https://elvectogo.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Voir le site démo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
