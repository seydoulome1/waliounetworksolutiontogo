
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import ProposalSection from '../components/ProposalSection';
import ContactButton from '../components/ContactButton';
import { Card, CardContent } from '@/components/ui/card';

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
                  <h5 className="font-semibold mb-2">2. Plan d'hébergement premium LWS Performance</h5>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <Card className="bg-gradient-to-b from-white to-blue-50">
                      <CardContent className="p-4 pt-4">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                            </svg>
                          </div>
                          <h6 className="font-semibold">Domaines</h6>
                        </div>
                        <ul className="space-y-2 ml-2">
                          <li className="flex items-center">
                            <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                            <span>2 noms de domaine offerts</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                            <span>Certificat SSL (https) sécurisé</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                            <span>Protection Whois gratuite</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-b from-white to-blue-50">
                      <CardContent className="p-4 pt-4">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h6 className="font-semibold">Mails</h6>
                        </div>
                        <ul className="space-y-2 ml-2">
                          <li className="flex items-center">
                            <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                            <span>Adresses e-mail pro illimitées</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                            <span>Webmail accessible partout</span>
                          </li>
                          <li className="flex items-center">
                            <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                            <span>Anti-spam et anti-virus intégrés</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-b from-white to-blue-50 md:col-span-2">
                      <CardContent className="p-4 pt-4">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                            </svg>
                          </div>
                          <h6 className="font-semibold">Hébergement</h6>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                          <ul className="space-y-2 ml-2">
                            <li className="flex items-center">
                              <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                              <span>300 Go d'espace disque SSD</span>
                            </li>
                            <li className="flex items-center">
                              <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                              <span>Trafic illimité</span>
                            </li>
                            <li className="flex items-center">
                              <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                              <span>Sauvegardes journalières</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 ml-2">
                            <li className="flex items-center">
                              <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                              <span>PHP / MySQL optimisés</span>
                            </li>
                            <li className="flex items-center">
                              <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                              <span>WordPress, PrestaShop pré-installés</span>
                            </li>
                            <li className="flex items-center">
                              <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                              <span>WordPress Manager</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 ml-2">
                            <li className="flex items-center">
                              <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                              <span>Panneau de contrôle intuitif</span>
                            </li>
                            <li className="flex items-center">
                              <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                              <span>Support prioritaire 24/7</span>
                            </li>
                            <li className="flex items-center">
                              <span className="w-4 h-4 text-green-600 mr-2">✓</span>
                              <span>Migration gratuite</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-3">Pour accéder à la version déjà développée, consultez :</p>
            <a 
              href="https://elvectogo.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline inline-flex items-center"
            >
              https://elvectogo.vercel.app/
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
