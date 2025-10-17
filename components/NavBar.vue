<template>
    <nav class="navbar">
        <img :src="logo" alt="FoodMart Logo" class="logo" />
        <div class="search-area">
            <select class="categories">
                <option>All Categories</option>
                <option>Groceries</option>
                <option>Drinks</option>
                <option>Chocolate</option>
            </select>
            <input class="searchbox" type="search" placeholder="Search for more than 20,000 products" />
            <button class="src">
                <img :src="search" alt="search button" class="src2" />
            </button>
        </div>
        <div class="nav-right">
            <div class="support">
                <h3>For Support?</h3>
                <h2>+980-34984089</h2>
            </div>
            <div class="right-area">
                <button class="icon-btn">
                    <img :src="user" alt="user Logo" class="user" />
                </button>
                <button class="icon-btn">
                    <img :src="heart" alt="heart Logo" class="heart" />
                </button>
            </div>
            <button class="crtbtn" @click="cart.toggleCart">
                Your Cart &#9662;<br>
                <b style="color: black;">${{ cart.totalPrice.toFixed(2) }}</b>
            </button>
            <Transition name="cart">
                <CartDrawer v-if="cart.showCart" @close="cart.toggleCart" />
            </Transition>
        </div>
    </nav>

    <nav class="subnavbar">
        <!-- Hamburger Menu Button (Mobile Only) -->
        <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <div class="departments" v-if="!isMobile">
            <select>
                <option>Shop by Departments</option>
                <option>Groceries</option>
                <option>Drinks</option>
                <option>Chocolate</option>
            </select>
        </div>

        <!-- Menu Links with mobile overlay -->
        <div class="menu-wrapper" :class="{ open: isMenuOpen }">
            <ul class="menu-links">
                <li class="mobile-departments">
                    <select @change="closeMenu">
                        <option>Shop by Departments</option>
                        <option>Groceries</option>
                        <option>Drinks</option>
                        <option>Chocolate</option>
                    </select>
                </li>
                <li><a href="#" @click="closeMenu">Women</a></li>
                <li><a href="#" @click="closeMenu">Men</a></li>
                <li><a href="#" @click="closeMenu">Kids</a></li>
                <li><a href="#" @click="closeMenu">Accessories</a></li>

                <li class="dropdown">
                    <a href="#" @click.prevent="toggleDropdown">Pages ▼</a>
                    <ul class="submenu" :class="{ open: isDropdownOpen }">
                        <li><a href="#" @click="closeMenu">About</a></li>
                        <li><a href="#" @click="closeMenu">Contact</a></li>
                    </ul>
                </li>

                <li><a href="#" @click="closeMenu">Brand</a></li>
                <li><a href="#" @click="closeMenu">Sale</a></li>
                <li><a href="#" @click="closeMenu">Blog</a></li>
            </ul>
        </div>

        <!-- Overlay for mobile menu -->
        <div class="menu-overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '~/stores/Cart'

const cart = useCartStore()

const logo = '/images/logo.png'
const search = '/images/search.png'
const user = '/images/user.png'
const heart = '/images/heart.png'

const isMobile = ref(false)
const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)

const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768
    if (!isMobile.value) {
        isMenuOpen.value = false
        isDropdownOpen.value = false
    }
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    isDropdownOpen.value = false
}

const closeMenu = () => {
    isMenuOpen.value = false
    isDropdownOpen.value = false
}

const toggleDropdown = () => {
    if (isMobile.value) {
        isDropdownOpen.value = !isDropdownOpen.value
    }
}

onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})
</script>

<style lang="scss">
/* Cart transition styles - must be non-scoped to affect child component */
.cart-enter-active,
.cart-leave-active {
    transition: none;

    .cart-drawer {
        transition: transform 0.3s ease;
    }

    .cart-backdrop {
        transition: opacity 0.3s ease;
    }
}

.cart-enter-from,
.cart-leave-to {
    .cart-drawer {
        transform: translateX(100%);
    }

    .cart-backdrop {
        opacity: 0;
    }
}
</style>

<style scoped lang="scss">
.navbar {
    margin: 10px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: #fff;

    .logo {
        height: 55px;
        width: 16%;
    }

    .search-area {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        max-width: 650px;
        min-width: 0;
        background: #f8f8f8;
        border: 2px solid transparent;
        transition: border-color 0.2s ease;
        border-radius: 12px;

        .categories {
            border: none;
            background: transparent;
            padding: 0 55px 0 18px;
            font-size: 16px;
            color: #9c9c9c;
            outline: none;
            cursor: pointer;
            border-radius: 8px;
            min-height: 36px;
            min-width: 120px;
            flex-shrink: 0;
            transition: all 0.3s ease;

            &:focus {
                border: rgb(168, 75, 255);
                box-shadow: 0px 0px 0px 5px #91bbffcb;
                transition: all 0.3s ease;
            }
        }

        .searchbox {
            flex: 1;
            min-width: 0;
            border: none;
            border-radius: 8px;
            background: transparent;
            padding: 10px 10px;
            font-size: 15px;
            outline: none;
            color: #464545;
            transition: all 0.3s ease;

            &::placeholder {
                text-align: center;
                color: #616161;
                font-size: large;
            }

            &:focus {
                border: rgb(168, 75, 255);
                box-shadow: 0px 0px 0px 5px #91bbffcb;
                transition: all 0.3s ease;
            }
        }

        .src {
            border: none;
            background: transparent;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 10px;
            height: 50px;
            flex-shrink: 0;

            .src2 {
                height: 23px;
                width: 93%;
            }
        }
    }

    .nav-right {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        line-height: 30px;

        .support {
            text-align: right;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

            h3 {
                margin: 0;
                font-size: 16px;
                color: #7a7a7a;
            }

            h2 {
                margin: 0;
                font-size: 20px;
            }
        }

        .right-area {
            display: flex;
            align-items: end;
            gap: 6px;

            .icon-btn {
                height: 40px;
                width: 40px;
                border: none;
                border-radius: 50%;
                background: #f8f8f8;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                .user,
                .heart {
                    height: 20px;
                }
            }
        }

        .crtbtn {
            text-align: justify;
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: larger;
            color: #555;
        }
    }
}

.subnavbar {
    margin: 20px 8% 30px 8%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding: 10px 5px;
    border-top: 1px solid #f5f5f5;
    font-size: larger;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;

    .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 5px;
        z-index: 1001;

        span {
            display: block;
            width: 25px;
            height: 3px;
            background: #555;
            transition: all 0.3s ease;
            border-radius: 2px;
        }

        &.active {
            span:nth-child(1) {
                transform: rotate(45deg) translate(4px, 7.5px);
            }

            span:nth-child(2) {
                opacity: 0;
            }

            span:nth-child(3) {
                transform: rotate(-45deg) translate(4px, -7.5px);
            }
        }
    }

    .departments {
        select {
            padding: 15px 13px 15px 8px;
            border: none;
            background: #e9e9e9f5;
            font-size: 16px;
            cursor: pointer;
            text-align: left;
        }
    }

    .menu-wrapper {
        flex: 1;
    }

    .menu-links {
        list-style: none;
        display: flex;
        gap: 2rem;
        margin: 10px;
        padding: 0;

        .mobile-departments {
            display: none;
        }

        li {
            position: relative;

            a {
                text-decoration: none;
                color: #555;
                font-size: 17px;
                transition: 0.2s;

                &:hover {
                    color: #000;
                    font-weight: bold;
                }
            }

            &.dropdown {
                .submenu {
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-40px);
                    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s 0.3s;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: #fff;
                    border: 1px solid #eee;
                    list-style: none;
                    padding: 10px;
                    min-width: 120px;
                    z-index: 10;

                    li {
                        margin: 5px 0;

                        a {
                            color: #333;
                            font-size: 14px;

                            &:hover {
                                color: #000;
                                font-weight: bold;
                            }
                        }
                    }
                }

                &:hover .submenu {
                    opacity: 1;
                    visibility: visible;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }
            }
        }
    }

    .menu-overlay {
        display: none;
    }
}

@media (max-width: 1024px) and (min-width: 769px) {
    .navbar {
        margin: 10px 4%;

        .logo {
            height: 50px;
            width: 150px;
        }

        .search-area {
            max-width: 400px;

            .categories {
                padding: 0 25px 0 12px;
                font-size: 14px;
            }

            .searchbox {
                font-size: 13px;

                &::placeholder {
                    font-size: 14px;
                }
            }
        }

        .nav-right {
            gap: 20px;

            .support {
                h3 {
                    font-size: 14px;
                }

                h2 {
                    font-size: 18px;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .navbar {
        flex-wrap: wrap;
        margin: 10px 3%;
        padding: 10px;

        .logo {
            height: 45px;
            width: 170px;
            flex-shrink: 0;
        }

        .search-area {
            order: 3;
            width: 100%;
            max-width: 100%;
            margin-top: 15px;

            .categories {
                padding: 0 10px 0 8px;
                font-size: 14px;
                min-width: 100px;
            }

            .searchbox {
                font-size: 10px;

                &::placeholder {
                    font-size: 10px;
                }
            }
        }

        .nav-right {
            gap: 10px;

            .support {
                display: none;
            }

            .right-area {
                gap: 5px;

                .icon-btn {
                    height: 35px;
                    width: 35px;
                }
            }

            .crtbtn {
                font-size: 14px;
                padding: 5px;
            }
        }
    }

    .subnavbar {
        margin: 10px 3% 20px 3%;
        padding: 10px 0;

        .hamburger {
            display: flex;
        }

        .departments {
            display: none;
        }

        .menu-wrapper {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: #fff;
            transition: right 0.3s ease;
            z-index: 1000;
            overflow-y: auto;
            box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

            &.open {
                right: 0;
            }
        }

        .menu-links {
            flex-direction: column;
            gap: 0;
            margin: 60px 0 0 0;
            padding: 20px;

            .mobile-departments {
                display: block;
                padding: 15px 0;
                border-top: 1px solid #eee;
                margin-top: 10px;

                select {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    background: #f8f8f8;
                    font-size: 16px;
                    cursor: pointer;
                    border-radius: 8px;
                }
            }

            li {
                padding: 15px 0;
                border-bottom: 1px solid #eee;

                a {
                    font-size: 18px;
                    display: block;
                }

                &.dropdown {
                    .submenu {
                        position: static;
                        opacity: 1;
                        visibility: visible;
                        transform: none;
                        border: none;
                        padding: 0;
                        margin-top: 10px;
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease;

                        &.open {
                            max-height: 200px;
                        }

                        li {
                            padding: 10px 0 10px 20px;
                            border: none;

                            a {
                                font-size: 16px;
                            }
                        }
                    }

                    &:hover .submenu {
                        opacity: 1;
                        visibility: visible;
                        transform: translateX(0);
                        transition: opacity 0.3s ease, transform 0.3s ease;
                    }
                }
            }
        }

        .menu-overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0s 0.3s;
            z-index: 999;

            &.active {
                opacity: 1;
                visibility: visible;
                transition: opacity 0.3s ease;
            }
        }
    }
}

@media (max-width: 590px) {
    .navbar {
        .search-area {
            gap: 4px;

            .categories {
                padding: 0 5px 0 5px;
                font-size: 12px;
                min-width: 80px;
            }

            .searchbox {
                font-size: 9px;
                padding: 8px 5px;

                &::placeholder {
                    font-size: 9px;
                    text-align: left;
                }
            }

            .src {
                padding: 0 5px;
                height: 40px;

                .src2 {
                    height: 18px;
                }
            }
        }
    }
}

@media (max-width: 480px) {
    .navbar {
        flex-wrap: wrap;
        flex-shrink: calc(100vh - 10px);
        justify-content: space-between;

        .search-area {
            gap: 3px;

            .categories {
                padding: 0 3px;
                font-size: 11px;
                min-width: 70px;
            }

            .searchbox {
                font-size: 8px;
                padding: 8px 3px;

                &::placeholder {
                    font-size: 8px;
                }
            }

            .src {
                padding: 0 3px;
                height: 36px;

                .src2 {
                    height: 16px;
                }
            }
        }
    }
}
</style>