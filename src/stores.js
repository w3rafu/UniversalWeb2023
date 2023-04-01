import { writable } from "svelte/store";

export let windowSize = writable(0)
export let scrolled = writable(0)

export let app_navigation = writable({
    services: {
        lease: {
            label: 'Lease a Website',
            path: '/lease-a-website',
            icon: 'captive_portal'
        },
        optimize: {
            label: 'Search Engine Optimization',
            path: '/search-engine-optimization',
            icon: 'rocket' 
        },
        compliance: {
            label: 'Accessibility Compliance',
            path: '/accessibility-compliance',
            icon: 'accessible' 
        }
    },
    learn: {
        about: {
            label: 'About Us',
            path: '/about-us',
            icon: 'groups_3'
        },
        articles: {
            label: 'Articles',
            path: '/articles',
            icon: 'library_books'  
        },

        contact: {
            label: 'Contact Us',
            path: '/contact-us',
            icon: 'balance'  
        }
    },
    values : {
        ethics: {
            label: 'Ethical Statement',
            path: '/ethical-statement',
            icon: 'cg_heart'  
        },
        terms: {
            label: 'Terms & Policies',
            path: '/terms-and-policies',
            icon: 'balance'  
        },
        join: {
            label: 'Join our Team',
            path: '/join-our-team',
            icon: 'diversity_3'
        }
    }

})