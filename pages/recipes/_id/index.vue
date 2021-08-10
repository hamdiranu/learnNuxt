/* eslint-disable nuxt/no-timing-in-fetch-data */
<template>
    <section class="single-recipe">
        <h1>{{ $route.params.id }}</h1>
        <div>
            <img class="recipe-image" :src="recipe.thumbnail" :alt="recipe.title">
        </div>
        <p>{{ recipe.descriptionText }}</p>
        <nuxt-link :to="'/recipes'">
            <button class="btn-back">
                Back
            </button>
        </nuxt-link>
    </section>
</template>

<script>
export default {
    asyncData(context) {
        return {
            recipe: [
                {
                    id: "1",
                    title: "Delicious hamburger",
                    previewText: "Awesome hamburger",
                    descriptionText: "What a tasty snack!",
                    thumbnail: "https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg"
                },
                {
                    id:"2",
                    title: "Delicious vegetables",
                    previewText: "Awesome vegetables",
                    descriptionText: "What a tasty meal!",
                    thumbnail: "https://www.medicalnewstoday.com/content/images/articles/324/324956/close-up-of-a-plate-of-food.jpg"
                }
            ].find(el => el.id === context.params.id)
        }
    }
};
</script>

<style scoped>
.single-recipe {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px;
}

.recipe-image {
    width: 100%;
}

.btn-back{
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 6px;
}
</style>