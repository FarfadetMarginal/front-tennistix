function Conf() {
  return (
    <>
      <h2>Politique de confidentialité</h2>
      <p><strong>Version de travail — ne pas publier en l’état. France / EEE · 15/10/2026.</strong></p>
      <h3>Responsable et données traitées</h3>
      <p>Le responsable du traitement indiqué pour le projet est Baptiste COUTAS, personne physique, joignable à <a href="mailto:bapt935@gmail.com">bapt935@gmail.com</a>. Tennistix vise initialement la France et l’EEE. Le statut juridique, les coordonnées et la nécessité éventuelle d’un DPO restent à confirmer.</p>
      <p>Les fonctionnalités repérées utilisent l’adresse e-mail, le pseudonyme, un mot de passe haché, un identifiant de compte, un avatar, les pronostics et scores, les favoris, les relations d’amitié et des jetons de session/réinitialisation de mot de passe.</p>
      <h3>Finalités et fondements envisagés</h3>
      <ul>
        <li>Créer et gérer un compte, authentifier l’utilisateur et fournir les fonctions demandées : exécution du service demandé.</li>
        <li>Enregistrer pronostics, scores, classement, favoris et amis : fonctionnement des fonctionnalités demandées.</li>
        <li>Réinitialiser le mot de passe, sécuriser le service et prévenir les abus : fonctionnement du service et intérêt légitime de sécurité, à documenter.</li>
      </ul>
      <p>Ces fondements doivent être validés après inventaire des traitements. Aucune donnée de paiement n’est nécessaire dans la version décrite : les points sont gratuits, sans valeur et sans récompense.</p>
      <h3>Destinataires et fournisseurs</h3>
      <p>L’accès est limité à l’éditeur et aux prestataires nécessaires. Le code indique Vercel pour le site, Render pour l’API, Brevo pour les e-mails de réinitialisation, LiveTennisAPI pour les données sportives, ainsi que des polices chargées depuis Google Fonts. L’éditeur indique que PostgreSQL est hébergé par Supabase. Les entités contractuelles, régions de traitement, sous-traitants et éventuels transferts hors EEE restent à vérifier avant publication.</p>
      <h3>Conservation et suppression</h3>
      <p><strong>À fixer avant publication.</strong> L’éditeur indique actuellement que les données sont conservées indéfiniment. Les données personnelles identifiantes ne doivent pas être conservées indéfiniment sans justification : une durée proportionnée doit être définie par finalité.</p>
      <p>Projet à valider : données du compte pendant la vie du compte; après une demande de suppression par e-mail, effacement ou anonymisation des données actives dans un délai <strong>[À FIXER]</strong>, y compris pronostics et relations d’amitié selon une règle documentée. Purge des sauvegardes : <strong>[À FIXER]</strong>. Des données strictement nécessaires peuvent être conservées séparément si la loi ou un litige l’exige.</p>
      <h3>Vos droits</h3>
      <p>Selon les conditions du RGPD, vous pouvez demander l’accès, la rectification, l’effacement, la limitation, la portabilité lorsque celle-ci est applicable, ou vous opposer à un traitement fondé sur l’intérêt légitime. Vous pouvez retirer un consentement lorsque le traitement repose sur celui-ci. Contact : <a href="mailto:bapt935@gmail.com">bapt935@gmail.com</a>. Vous pouvez également saisir la CNIL ou l’autorité de contrôle compétente dans l’EEE. Aucun DPO n’est confirmé dans ce brouillon.</p>
      <h3>Mineurs</h3>
      <p>Tennistix est prévu pour tous les âges. Les informations doivent être simples et adaptées aux mineurs. Dans l’EEE, l’âge auquel un mineur peut consentir seul à un traitement fondé sur le consentement dans un service en ligne varie de 13 à 16 ans selon le pays; il est de 15 ans en France. Sous le seuil applicable, le consentement du parent ou représentant légal et celui du mineur sont requis pour les traitements concernés. Le parcours parental et les modalités d’acceptation des conditions par les mineurs ne sont pas confirmés comme opérationnels.</p>
      <h3>Cookies et traceurs</h3>
      <p>Le serveur définit un cookie d’authentification nommé <code>tokenRefresh</code>, avec les attributs HttpOnly, Secure, SameSite=None et une durée maximale de sept jours. Sa finalité d’authentification doit être confirmée. Le code importe des polices de Google Fonts. Aucun outil d’analytique ou de publicité n’a été repéré dans les fichiers examinés; l’inventaire doit être vérifié dans la version déployée. Tout traceur non exempté nécessite le consentement préalable applicable, avec un refus aussi simple que l’acceptation.</p>
      <aside style={{ padding: "12px", background: "#fff7db", border: "1px solid #e8d99b" }}><strong>À finaliser avant publication :</strong> durées de conservation et effacement, hébergement et transferts, parcours mineurs, fondement juridique final et inventaire des traceurs.</aside>
    </>
  )
}

export default Conf
