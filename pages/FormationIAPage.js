import { Component } from '../js/core/Component.js';
import { submitLeadFromForm } from '../js/leadSubmit.js';

export class FormationIAPage extends Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            modalOpen: false,
            values: {
                formation_souhaitee: '',
                situation: '',
                lieu: '',
                niveau: '',
                prenom: '',
                nom: '',
                phone: '',
                email: '',
                consent: false,
            },
        };
        this._handleEscape = this._handleEscape.bind(this);
    }

    template() {
        return `
            <div class="formation-ia-page">
                <!-- Hero Section -->
                <section class="hero hero-page hero-formation-ia">
                    <div class="hero-page-overlay"></div>
                    <div class="floating-icons">
                        <i class="fas fa-robot float-icon float-1"></i>
                        <i class="fas fa-brain float-icon float-2"></i>
                        <i class="fas fa-microchip float-icon float-3"></i>
                        <i class="fas fa-network-wired float-icon float-4"></i>
                        <i class="fas fa-cogs float-icon float-5"></i>
                    </div>
                    <div class="container">
                        <div class="hero-page-content">
                            <div class="hero-badge fade-in">
                                <i class="fas fa-brain"></i>
                                <span>Intelligence Artificielle</span>
                            </div>
                            <h1 class="hero-title fade-in">Formez-vous aux métiers de <span class="text-accent">l'intelligence artificielle</span></h1>
                            <p class="hero-page-subtitle slide-up">Développez vos compétences en IA et préparez-vous aux métiers de demain</p>
                            <div class="hero-cta slide-up">
                                <button type="button" class="btn btn-primary btn-lg pulse-hover ia-open-modal">
                                    <i class="fas fa-phone-alt"></i>
                                    Être rappelé(e) par un conseiller
                                </button>
                                <a href="#domaines" class="btn btn-secondary btn-lg">
                                    <i class="fas fa-arrow-down"></i>
                                    Découvrir les formations
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section Intro : Domaines de l'IA -->
                <section class="ia-section ia-intro" id="domaines">
                    <div class="container">
                        <h2 class="ia-section-title fade-in">Formez-vous aux métiers de l'intelligence artificielle</h2>
                        <p class="ia-section-subtitle slide-up">L'intelligence artificielle (IA) est un domaine en plein essor qui offre de nombreuses opportunités professionnelles. En vous formant aux métiers de l'intelligence, vous pourrez exploiter tout votre potentiel et bénéficier de nombreux avantages.</p>
                        <p class="ia-section-subtitle slide-up">Voici quelques domaines dans lesquels l'IA joue un rôle essentiel :</p>

                        <div class="ia-domaines-grid">
                            <div class="ia-domaines-image scale-in">
                                <img src="/assets/images/ia-businessman.png" alt="Professionnel IA" loading="lazy">
                            </div>
                            <div class="ia-domaines-list">
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Santé</h3>
                                        <p>Dans le domaine de la santé, l'intelligence artificielle permet d'analyser de vastes quantités de données médicales afin de faciliter le diagnostic de maladies, d'assister les chirurgiens lors d'opérations complexes et de promouvoir la recherche médicale.</p>
                                    </div>
                                </div>
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Transports</h3>
                                        <p>L'intelligence artificielle révolutionne le secteur des transports en permettant la conduite autonome des véhicules. Elle permet également d'optimiser la logistique et la gestion du trafic, réduisant ainsi les temps de trajet et les émissions de gaz à effet de serre.</p>
                                    </div>
                                </div>
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Finance</h3>
                                        <p>Dans le domaine financier, l'intelligence artificielle est utilisée pour détecter les fraudes, analyser les risques, gérer les portefeuilles et effectuer du trading à haute fréquence. Elle automatise des tâches complexes, améliore la prédiction des marchés et optimise les décisions d'investissement.</p>
                                    </div>
                                </div>
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Marketing</h3>
                                        <p>L'intelligence artificielle révolutionne le marketing en permettant l'analyse des données clients pour personnaliser les offres et recommandations, optimiser les campagnes publicitaires et améliorer l'expérience utilisateur. Elle facilite également l'automatisation du marketing avec des chatbots et des systèmes de recommandation.</p>
                                    </div>
                                </div>
                                <div class="ia-domaine-item slide-up">
                                    <div class="ia-domaine-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-domaine-content">
                                        <h3>Énergie</h3>
                                        <p>Dans le domaine de l'énergie, l'intelligence artificielle est utilisée pour la gestion intelligente des réseaux électriques, optimisant la production, la distribution et la consommation d'énergie. Elle favorise l'utilisation de sources d'énergie renouvelable, améliore l'efficacité énergétique et contribue à la réduction des émissions de carbone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section : Métiers de l'IA -->
                <section class="ia-section ia-metiers">
                    <div class="container">
                        <div class="ia-metiers-grid">
                            <div class="ia-metiers-content">
                                <h2 class="ia-section-title fade-in">Les métiers de l'intelligence artificielle : Potentiel, avantages et domaines en synergie</h2>
                                <ul class="ia-metiers-list slide-up">
                                    <li>
                                        <strong>Potentiel :</strong> L'IA offre un potentiel illimité en matière de résolution de problèmes complexes, d'automatisation des tâches répétitives et de création de nouvelles applications innovantes. En vous formant aux métiers de l'intelligence, vous serez en mesure d'exploiter ce potentiel et de contribuer au développement de technologies avancées.
                                    </li>
                                    <li>
                                        <strong>Avantages :</strong> Les métiers de l'intelligence offrent de nombreux avantages, tels que des opportunités de carrière attrayantes, des salaires compétitifs et une demande croissante sur le marché du travail. De plus, travailler dans ce domaine vous permettra de repousser les limites de la technologie et de participer à des projets passionnants.
                                    </li>
                                    <li>
                                        <strong>Domaines :</strong> L'IA est présente dans de nombreux domaines, tels que la santé, les transports, la finance, l'énergie, le marketing, l'éducation, etc. En vous formant aux métiers de l'intelligence, vous pourrez choisir parmi une multitude de domaines d'application et travailler sur des problématiques variées.
                                    </li>
                                </ul>
                            </div>
                            <div class="ia-metiers-image scale-in">
                                <img src="/assets/images/ia-businessman.png" alt="Expert IA au travail" loading="lazy">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section : Le collectif Symetric AI -->
                <section class="ia-section ia-collectif">
                    <div class="container">
                        <div class="ia-collectif-grid">
                            <div class="ia-collectif-logo scale-in">
                                <img src="/assets/images/symetric-ai-logo.png" alt="Symetric AI" loading="lazy">
                            </div>
                            <div class="ia-collectif-content">
                                <h2 class="ia-section-title fade-in">Le collectif Symetric AI</h2>
                                <p class="slide-up">Le collectif Symetric AI rassemble des experts multi domaines en intelligence artificielle, issus à la fois du monde académique et de l'industrie. Nous mettons notre expertise au service de vos projets et offrons une gamme de services pour accompagner votre entreprise dans son parcours vers l'IA.</p>
                                <p class="slide-up">Voici ce que nous proposons :</p>
                                <div class="ia-collectif-services">
                                    <div class="ia-service-item slide-up">
                                        <div class="ia-service-icon"><i class="fas fa-check-circle"></i></div>
                                        <div class="ia-service-content">
                                            <h3>Certification</h3>
                                            <p>Nous proposons des certifications reconnues dans le domaine de l'intelligence artificielle. Ces certifications attestent de vos compétences et vous permettent de vous démarquer sur le marché du travail.</p>
                                        </div>
                                    </div>
                                    <div class="ia-service-item slide-up">
                                        <div class="ia-service-icon"><i class="fas fa-check-circle"></i></div>
                                        <div class="ia-service-content">
                                            <h3>Accompagnement projet</h3>
                                            <p>Notre collectif d'experts vous accompagne tout au long de votre projet d'intelligence artificielle, de la phase de conception à la mise en œuvre. Nous vous apportons les conseils et l'expertise nécessaires pour garantir le succès de votre projet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section : Formations -->
                <section class="ia-section ia-formations">
                    <div class="container">
                        <h2 class="ia-section-title fade-in">Formations</h2>
                        <p class="ia-section-subtitle slide-up">L'IA est présente dans de nombreux domaines, tels que la santé, les transports, la finance, l'énergie, le marketing, l'éducation, etc. En vous formant aux métiers de l'intelligence, vous pourrez choisir parmi une multitude de domaines d'application et travailler sur des problématiques variées. Nous proposons une gamme de formations spécialisées dans le domaine de l'intelligence artificielle. Que vous soyez intéressé par l'IA pour le marketing digital, le développement d'applications basées sur l'IA, ou encore l'utilisation de ChatGPT, nous avons des formations adaptées à vos besoins. Voici quelques-unes de nos formations populaires :</p>

                        <div class="ia-formations-grid">
                            <div class="ia-formations-list">
                                <div class="ia-formation-item slide-up">
                                    <div class="ia-formation-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-formation-content">
                                        <h3>IA pour le Marketing Digital</h3>
                                        <p>Apprenez comment utiliser l'intelligence artificielle pour optimiser vos stratégies de marketing digital, améliorer la personnalisation des messages et prédire les comportements des consommateurs.</p>
                                    </div>
                                </div>
                                <div class="ia-formation-item slide-up">
                                    <div class="ia-formation-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-formation-content">
                                        <h3>ChatGPT</h3>
                                        <p>Découvrez comment utiliser ChatGPT, un modèle de langage puissant, pour développer des chatbots intelligents capables de comprendre et de répondre aux requêtes des utilisateurs de manière naturelle.</p>
                                    </div>
                                </div>
                                <div class="ia-formation-item slide-up">
                                    <div class="ia-formation-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-formation-content">
                                        <h3>IA pour Développeurs</h3>
                                        <p>Cette formation s'adresse aux développeurs qui souhaitent acquérir des compétences en intelligence artificielle. Apprenez à mettre en œuvre des algorithmes d'apprentissage automatique, à créer des modèles prédictifs et à intégrer l'IA dans vos applications.</p>
                                    </div>
                                </div>
                                <div class="ia-formation-item slide-up">
                                    <div class="ia-formation-icon"><i class="fas fa-check-circle"></i></div>
                                    <div class="ia-formation-content">
                                        <h3>IA pour Décideurs</h3>
                                        <p>Cette formation s'adresse aux professionnels non techniques qui souhaitent comprendre les principes de base de l'intelligence artificielle et son impact sur les entreprises. Vous apprendrez comment tirer parti de l'IA pour prendre des décisions stratégiques éclairées.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="ia-formations-image scale-in">
                                <img src="/assets/images/ia-businessman.png" alt="Formation IA" loading="lazy">
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section : Contact CTA (ouvre le formulaire en modal) -->
                <section class="ia-section ia-contact" id="contact-ia">
                    <div class="container">
                        <div class="ia-contact-center">
                            <div class="ia-contact-badge fade-in">
                                <i class="fas fa-rocket"></i>
                                <span>Démarrez votre projet IA</span>
                            </div>
                            <h2 class="fade-in">Prêt(e) à vous lancer dans l'<span class="text-accent">IA</span> ?</h2>
                            <p class="slide-up">Échangez avec un conseiller pour identifier la formation la plus adaptée à votre profil, vos objectifs et vos modalités de financement.</p>
                            <ul class="ia-contact-reassurance slide-up">
                                <li><i class="fas fa-check"></i> Réponse personnalisée sous 24h ouvrées</li>
                                <li><i class="fas fa-check"></i> Étude gratuite et sans engagement</li>
                                <li><i class="fas fa-check"></i> Accompagnement par notre collectif d'experts</li>
                            </ul>
                            <div class="ia-contact-cta scale-in">
                                <button type="button" class="btn btn-primary btn-lg pulse-hover ia-open-modal">
                                    <i class="fas fa-phone-alt"></i>
                                    Être rappelé(e) par un conseiller
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Modal Formulaire IA -->
                <div class="ia-modal" id="ia-modal" role="dialog" aria-modal="true" aria-labelledby="ia-modal-title" aria-hidden="true">
                    <div class="ia-modal-overlay" data-action="close-modal"></div>
                    <div class="ia-modal-box">
                        <button type="button" class="ia-modal-close" data-action="close-modal" aria-label="Fermer">
                            <i class="fas fa-times"></i>
                        </button>
                        <div class="ia-form-wrapper">
                            <div class="ia-form-header">
                                <h3 id="ia-modal-title">Parlez-nous de votre projet IA</h3>
                                <p>Quelques questions pour vous orienter vers la formation la plus adaptée.</p>
                            </div>
                            ${this.renderWizard()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderWizard() {
        const { step, values } = this.state;
        const totalSteps = 2;
        const progress = (step / totalSteps) * 100;

        return `
            <form class="ia-form-wizard" novalidate>
                <div class="ia-wizard-progress" aria-hidden="true">
                    <div class="ia-wizard-progress-bar" style="width: ${progress}%"></div>
                </div>
                <div class="ia-wizard-step-label">
                    <span>Étape ${step} sur ${totalSteps}</span>
                </div>

                <div class="ia-wizard-step ${step === 1 ? 'is-active' : ''}" data-step="1">
                    <h3 class="ia-wizard-title">Parlez-nous de votre projet</h3>

                    <div class="ia-form-group">
                        <label for="ia-formation">Formation souhaitée</label>
                        <select id="ia-formation" name="formation_souhaitee" data-field="formation_souhaitee" required>
                            <option value="">Choisissez</option>
                            <option value="ia-marketing-digital" ${values.formation_souhaitee === 'ia-marketing-digital' ? 'selected' : ''}>IA pour le Marketing Digital</option>
                            <option value="chatgpt" ${values.formation_souhaitee === 'chatgpt' ? 'selected' : ''}>ChatGPT &amp; IA générative</option>
                            <option value="ia-developpeurs" ${values.formation_souhaitee === 'ia-developpeurs' ? 'selected' : ''}>IA pour Développeurs</option>
                            <option value="ia-decideurs" ${values.formation_souhaitee === 'ia-decideurs' ? 'selected' : ''}>IA pour Décideurs</option>
                            <option value="non-defini" ${values.formation_souhaitee === 'non-defini' ? 'selected' : ''}>Je ne sais pas encore</option>
                        </select>
                    </div>

                    <div class="ia-form-row">
                        <div class="ia-form-group">
                            <label for="ia-situation">Situation</label>
                            <select id="ia-situation" name="situation" data-field="situation" required>
                                <option value="">Choisissez</option>
                                <option value="salarie" ${values.situation === 'salarie' ? 'selected' : ''}>Salarié(e) en poste</option>
                                <option value="demandeur-emploi" ${values.situation === 'demandeur-emploi' ? 'selected' : ''}>Demandeur d'emploi</option>
                                <option value="entreprise" ${values.situation === 'entreprise' ? 'selected' : ''}>Dirigeant / Entreprise</option>
                                <option value="independant" ${values.situation === 'independant' ? 'selected' : ''}>Indépendant(e)</option>
                                <option value="etudiant" ${values.situation === 'etudiant' ? 'selected' : ''}>Étudiant(e)</option>
                            </select>
                        </div>

                        <div class="ia-form-group">
                            <label for="ia-lieu">Lieu de formation</label>
                            <select id="ia-lieu" name="lieu" data-field="lieu" required>
                                <option value="">Choisissez</option>
                                <option value="distance" ${values.lieu === 'distance' ? 'selected' : ''}>À distance</option>
                                <option value="presentiel" ${values.lieu === 'presentiel' ? 'selected' : ''}>En présentiel</option>
                                <option value="mixte" ${values.lieu === 'mixte' ? 'selected' : ''}>Mixte (présentiel + distanciel)</option>
                            </select>
                        </div>
                    </div>

                    <div class="ia-form-group">
                        <label for="ia-niveau">Niveau actuel</label>
                        <select id="ia-niveau" name="niveau" data-field="niveau" required>
                            <option value="">Choisissez</option>
                            <option value="bep-cap" ${values.niveau === 'bep-cap' ? 'selected' : ''}>BEP / CAP</option>
                            <option value="bac" ${values.niveau === 'bac' ? 'selected' : ''}>BAC</option>
                            <option value="bac+2" ${values.niveau === 'bac+2' ? 'selected' : ''}>BAC +2</option>
                            <option value="bac+3" ${values.niveau === 'bac+3' ? 'selected' : ''}>BAC +3</option>
                            <option value="bac+4" ${values.niveau === 'bac+4' ? 'selected' : ''}>BAC +4</option>
                            <option value="bac+5" ${values.niveau === 'bac+5' ? 'selected' : ''}>BAC +5</option>
                            <option value="sup-bac+5" ${values.niveau === 'sup-bac+5' ? 'selected' : ''}>&gt; BAC +5</option>
                        </select>
                    </div>

                    <div class="ia-wizard-actions">
                        <button type="button" class="btn btn-orange btn-lg ia-wizard-next" data-action="next" ${this.isStep1Valid() ? '' : 'disabled'}>
                            Suivant
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <div class="ia-wizard-step ${step === 2 ? 'is-active' : ''}" data-step="2">
                    <h3 class="ia-wizard-title">Recevez gratuitement nos informations sur la formation</h3>

                    <div class="ia-form-row">
                        <div class="ia-form-group">
                            <label for="ia-prenom">Prénom</label>
                            <input type="text" id="ia-prenom" name="prenom" data-field="prenom" value="${values.prenom}" placeholder="Votre prénom" autocomplete="given-name" autocapitalize="words" required>
                        </div>
                        <div class="ia-form-group">
                            <label for="ia-nom">Nom</label>
                            <input type="text" id="ia-nom" name="nom" data-field="nom" value="${values.nom}" placeholder="Votre nom" autocomplete="family-name" autocapitalize="words" required>
                        </div>
                    </div>

                    <div class="ia-form-row">
                        <div class="ia-form-group">
                            <label for="ia-phone">Téléphone mobile</label>
                            <input type="tel" id="ia-phone" name="phone" data-field="phone" value="${values.phone}" placeholder="06 12 34 56 78" autocomplete="tel" inputmode="tel" required>
                        </div>
                        <div class="ia-form-group">
                            <label for="ia-email">Email</label>
                            <input type="email" id="ia-email" name="email" data-field="email" value="${values.email}" placeholder="vous@exemple.fr" autocomplete="email" inputmode="email" spellcheck="false" required>
                        </div>
                    </div>

                    <div class="ia-form-group ia-form-consent">
                        <label class="ia-checkbox-label">
                            <input type="checkbox" name="consent" data-field="consent" ${values.consent ? 'checked' : ''} required>
                            <span>
                                J'accepte d'être recontacté(e) par Formation Compétences au sujet de ma demande
                                et j'ai pris connaissance de la
                                <a href="/politique-confidentialite" target="_blank" rel="noopener">politique de confidentialité</a>.
                            </span>
                        </label>
                    </div>

                    <div class="ia-wizard-actions ia-wizard-actions-split">
                        <button type="button" class="btn btn-secondary btn-lg ia-wizard-back" data-action="back">
                            <i class="fas fa-arrow-left"></i>
                            Retour
                        </button>
                        <button type="submit" class="btn btn-orange btn-lg ia-wizard-submit" ${this.isStep2Valid() ? '' : 'disabled'}>
                            <i class="fas fa-paper-plane"></i>
                            Être rappelé(e) par un conseiller
                        </button>
                    </div>
                </div>
            </form>
        `;
    }

    isStep1Valid() {
        const v = this.state.values;
        return Boolean(v.formation_souhaitee && v.situation && v.lieu && v.niveau);
    }

    isStep2Valid() {
        const v = this.state.values;
        return Boolean(v.prenom && v.nom && v.phone && v.email && v.consent);
    }

    attachEvents() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });

        this.attachModalEvents();
        this.attachWizardEvents();
    }

    attachModalEvents() {
        document.querySelectorAll('.ia-open-modal').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        });

        const modal = document.getElementById('ia-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                const trigger = e.target.closest('[data-action="close-modal"]');
                if (trigger) {
                    e.preventDefault();
                    this.closeModal();
                }
            });
        }
    }

    openModal() {
        const modal = document.getElementById('ia-modal');
        if (!modal) return;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('ia-modal-locked');
        document.addEventListener('keydown', this._handleEscape);
        this.state.modalOpen = true;
    }

    closeModal() {
        const modal = document.getElementById('ia-modal');
        if (!modal) return;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('ia-modal-locked');
        document.removeEventListener('keydown', this._handleEscape);
        this.state.modalOpen = false;
    }

    _handleEscape(e) {
        if (e.key === 'Escape') this.closeModal();
    }

    attachWizardEvents() {
        const form = this.find('.ia-form-wizard');
        if (!form) return;

        form.addEventListener('change', (e) => this.handleFieldChange(e));
        form.addEventListener('input', (e) => this.handleFieldChange(e));

        form.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-action]');
            if (!btn) return;
            const action = btn.dataset.action;
            if (action === 'next') this.goToStep(2);
            else if (action === 'back') this.goToStep(1);
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit(form);
        });
    }

    handleFieldChange(e) {
        const field = e.target.dataset.field;
        if (!field) return;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.state.values[field] = value;
        this.refreshButtonsState();
    }

    refreshButtonsState() {
        const nextBtn = this.find('.ia-wizard-next');
        const submitBtn = this.find('.ia-wizard-submit');
        if (nextBtn) nextBtn.disabled = !this.isStep1Valid();
        if (submitBtn) submitBtn.disabled = !this.isStep2Valid();
    }

    goToStep(step) {
        if (step === 2 && !this.isStep1Valid()) return;
        this.state.step = step;
        const wrapper = document.querySelector('.ia-modal .ia-form-wrapper');
        if (!wrapper) return;

        const header = wrapper.querySelector('.ia-form-header');
        const headerHTML = header ? header.outerHTML : '';
        wrapper.innerHTML = headerHTML + this.renderWizard();
        this.attachWizardEvents();

        const box = document.querySelector('.ia-modal-box');
        if (box) box.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async handleSubmit(form) {
        if (!this.isStep2Valid()) return;
        const result = await submitLeadFromForm(form, {
            formType: 'formation-ia',
            successMessage: 'Merci pour votre demande. Un conseiller analysera votre projet et vous recontactera sous 24h ouvrées.',
        });

        if (result && result.ok) {
            setTimeout(() => {
                this.closeModal();
                setTimeout(() => this.resetWizard(), 400);
            }, 3500);
        }
    }

    resetWizard() {
        this.state.step = 1;
        this.state.values = {
            formation_souhaitee: '',
            situation: '',
            lieu: '',
            niveau: '',
            prenom: '',
            nom: '',
            phone: '',
            email: '',
            consent: false,
        };
        const wrapper = document.querySelector('.ia-modal .ia-form-wrapper');
        if (!wrapper) return;
        const header = wrapper.querySelector('.ia-form-header');
        const headerHTML = header
            ? header.outerHTML
            : '<div class="ia-form-header"><h3 id="ia-modal-title">Parlez-nous de votre projet IA</h3><p>Quelques questions pour vous orienter vers la formation la plus adaptée.</p></div>';
        wrapper.innerHTML = headerHTML + this.renderWizard();
        this.attachWizardEvents();
    }

    onMount() {
        this.initNavbarScroll();
    }

    initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        const hero = document.querySelector('.hero-page');
        if (!navbar || !hero) return;

        navbar.classList.add('navbar-hero');

        const handleScroll = () => {
            const heroBottom = hero.offsetTop + hero.offsetHeight;
            const scrollY = window.scrollY + navbar.offsetHeight;
            if (scrollY > heroBottom - 50) {
                navbar.classList.remove('navbar-hero');
                navbar.classList.remove('navbar-scrolled');
            } else {
                navbar.classList.add('navbar-hero');
                navbar.classList.remove('navbar-scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
}
