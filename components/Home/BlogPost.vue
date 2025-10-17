<template>
    <section class="container">
        <div class="title">
            <h1>Our Recent Blog</h1>
            <a href="#" class="read-all">Read All Articles &#10140;</a>
        </div>

        <div class="card-box">
            <div class="card" v-for="card in cards" :key="card.id">
                <img :src="card.image" alt="blog image" />
                <div class="status">
                    <span>
                        <i class="fa-regular fa-calendar" />
                        <p>{{ card.date }}</p>
                    </span>
                    <span>
                        <i class="fa-regular fa-folder" />
                        <p>{{ card.category }}</p>
                    </span>
                </div>
                <h2>{{ card.title }}</h2>
                <p class="description">{{ card.data }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import blog1 from '/images/Blog1.jpg'
import blog2 from '/images/Blog2.jpg'
import blog3 from '/images/Blog3.jpg'

const cards = [
    {
        id: 1,
        image: blog1,
        date: '22 Aug 2021',
        category: 'tips & tricks',
        title: 'Top 10 casual look ideas to dress up your kids',
        data: 'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...'
    },
    {
        id: 2,
        image: blog2,
        date: '25 Aug 2021',
        category: 'trending',
        title: 'Latest trends of wearing street wears supremely',
        data: 'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...'
    },
    {
        id: 3,
        image: blog3,
        date: '28 Aug 2021',
        category: 'inspiration',
        title: '10 Different Types of comfortable clothes ideas for women',
        data: 'Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...'
    }
]
</script>

<style lang="scss" scoped>
.container {
    margin: 30px 8%;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 2rem;
        }

        .read-all {
            color: rgb(121, 121, 121);
            text-decoration: none;
            font-size: 1rem;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .card-box {
        display: flex;
        flex-wrap: wrap;
        gap: 2%;
        margin-top: 20px;

        .card {
            background: #fff;
            border-radius: 8px;
            flex: 1 1 30%;
            max-width: 30%;
            padding: 1%;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            overflow: hidden;

            img {
                width: 100%;
                height: 350px;
                object-fit: cover;
                border-radius: 8px 8px 0 0;
            }

            .status {
                display: flex;
                flex-wrap: nowrap;
                gap: 4%;
                margin: 6px 0;
                font-size: 0.875rem;
                color: rgb(121, 121, 121);

                span {
                    display: flex;
                    align-items: center;
                    gap: 4%;
                }

                p {
                    margin: 6%;
                    min-width: fit-content;
                }
            }

            h2 {
                font-size: 1.5rem;
                margin: 6px 0 4px;
                padding: 0 8px;
                color: #333;
            }

            .description {
                margin: 0;
                padding: 0 8px;
                color: rgb(121, 121, 121);
                line-height: 1.8rem;
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 1024px) {
        .card-box {
            .card {
                flex: 1 1 48%;
                max-width: 48%;
            }
        }
    }

    @media (max-width: 768px) {
        .card-box {
            .card {
                flex: 1 1 100%;
                max-width: 100%;
            }
        }
    }
}
</style>
