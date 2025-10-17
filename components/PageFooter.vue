<template>
    <footer class="footer">
        <div class="features">
            <div class="feature" v-for="feat in feats" :key="feat.id">
                <div class="feature-header">
                    <i :class="feat.icon"></i>
                    <h4>{{ feat.heading }}</h4>
                </div>
                <p>{{ feat.data }}</p>
            </div>
        </div>

        <div class="footer-main">
            <div class="footer-col">
                <div class="logo">
                    <img :src="logo" alt="FoodMart Logo" />
                </div>
                <div class="socials">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-telegram-plane"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h3>Ultras</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Conditions</a></li>
                    <li><a href="#">Our Journals</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Affiliate Programme</a></li>
                    <li><a href="#">Ultras Press</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Customer Service</h3>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Returns & Refunds</a></li>
                    <li><a href="#">Cookie Guidelines</a></li>
                    <li><a href="#">Delivery Information</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Customer Service</h3>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Returns & Refunds</a></li>
                    <li><a href="#">Cookie Guidelines</a></li>
                    <li><a href="#">Delivery Information</a></li>
                </ul>
            </div>

            <!-- Subscribe -->
            <div class="footer-col subscribe-col">
                <h3>Subscribe Us</h3>
                <p class="subscribe-text">Subscribe to our newsletter to get updates about our grand offers.</p>
                <div class="subscribe">
                    <input type="email" placeholder="Email Address" v-model="email" />
                    <button @click="subscribe">Subscribe</button>
                </div>
            </div>
        </div>

        <!-- Bottom -->
        <div class="footer-bottom">
            <p>© 2025 Foodmart. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
// Asset path - adjust to match your project structure
const logo = '/images/logo.png'

// Email state
const email = ref('')

// Subscribe function
const subscribe = () => {
    if (email.value) {
        alert("Thank you for subscribing!")
        email.value = ''
    } else {
        alert("Please enter a valid email address")
    }
}

// Features data
const feats = [
    {
        id: 1,
        icon: "fas fa-shopping-cart icon",
        data: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
        heading: "Free delivery"
    },
    {
        id: 2,
        icon: "fas fa-lock icon",
        data: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
        heading: "100% secure payment"
    },
    {
        id: 3,
        icon: "fas fa-store icon",
        data: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
        heading: "Quality guarantee"
    },
    {
        id: 4,
        icon: "fas fa-map-marker-alt icon",
        data: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
        heading: "Guaranteed savings"
    },
    {
        id: 5,
        icon: "fas fa-gift icon",
        data: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
        heading: "Daily offers"
    }
]
</script>

<style scoped lang="scss">
.footer {
    background: $color-white;
    padding: $spacing-double;
    color: $color-text;
    margin: 0 6%;

    // Top features row
    .features {
        display: flex;
        justify-content: space-between;
        margin-bottom: $spacing-double;
        flex-wrap: nowrap;

        .feature {
            flex: 1 1 18%;
            text-align: center;
            padding: $spacing-base;

            .feature-header {
                display: flex;
                flex-wrap: wrap;

                .icon {
                    font-size: 1.7rem;
                    display: block;
                    margin-top: 0.5rem;
                    margin-right: 0.8rem;
                }

                h4 {
                    margin: 0.5rem 0;
                    font-weight: bold;
                    font-size: 21px;
                }
            }

            p {
                font-size: 1rem;
                color: $color-secondary;
                text-align: left;
                padding-left: 14%;
                margin-top: 5px;
                line-height: 1.8rem;
            }
        }
    }

    // Main footer content
    .footer-main {
        display: flex;
        justify-content: space-between;
        gap: 0px;
        margin-bottom: $spacing-double;
        flex-wrap: wrap;

        .footer-col {
            flex: 1 1 15%;

            h3 {
                margin-bottom: $spacing-base;
                font-size: 1.3rem;
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    margin-bottom: 0.5rem;

                    a {
                        text-decoration: none;
                        color: rgb(100, 100, 100);
                        transition: color $transition-speed;

                        &:hover {
                            color: $color-black;
                        }
                    }
                }
            }

            &.subscribe-col {
                .subscribe-text {
                    color: rgb(160, 159, 159);
                }
            }
        }

        // Logo section
        .logo {
            img {
                height: 54px;
            }
        }

        // Social icons
        .socials {
            display: flex;
            gap: 1rem;
            margin-top: 2.4rem;

            a {
                display: inline-block;
                width: 33px;
                height: 33px;
                background: $color-bg-light;
                border-radius: 6px;
                text-align: center;
                line-height: 32px;
                font-size: 1rem;
                color: $color-text;
                transition: all $transition-speed;

                &:hover {
                    background: $color-primary;
                    color: $color-white;
                }
            }
        }

        // Subscribe section
        .subscribe {
            display: flex;
            margin-top: $spacing-base;

            input {
                flex: 1;
                padding: 0.7rem;
                border: none;
                border-radius: $border-radius 0 0 $border-radius;
                outline: none;
                background-color: rgb(241, 241, 241);
                transition: border-color $transition-speed;

                &:focus {
                    border: rgb(168, 75, 255);
                    box-shadow: 0px 0px 0px 4px #91bbffcb;
                    transition: all 0.3s ease;
                }
            }

            button {
                padding: 0.5rem $spacing-base;
                border: none;
                background: $color-primary;
                color: $color-white;
                cursor: pointer;
                border-radius: 0 $border-radius $border-radius 0;
                transition: background $transition-speed;

                &:hover {
                    background: $color-black;
                }

                &:active {
                    transform: scale(1.05);
                }
            }
        }
    }

    // Bottom copyright
    .footer-bottom {
        border-top: 1px solid $color-border;
        padding-top: $spacing-base;
        font-size: 0.85rem;
        text-align: center;

        p {
            margin: 0;
            color: $color-secondary;
        }
    }
}

// Responsive styles
@media (max-width: 768px) {
    .footer {
        .features {
            flex-wrap: wrap;
            flex-direction: column;
            text-align: center;

            .feature {
                flex: 1 1 100%;

                p {
                    text-align: center;
                    padding-left: 0;
                }
            }
        }

        .footer-main {
            flex-direction: column;
            text-align: center;

            .footer-col {
                flex: 1 1 100%;
            }

            .socials {
                justify-content: center;
            }

            .subscribe {
                flex-direction: column;

                input,
                button {
                    width: 100%;
                    border-radius: $border-radius;
                    margin-top: 5px;
                }
            }
        }
    }
}
</style>