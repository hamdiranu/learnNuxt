<template>
    <section class="recipes">
        <Header />
        <Recipe
            v-for="recipe in recipes"
            :id="recipe.id"
            :key="recipe.id"
            :preview-text="recipe.previewText"
            :thumbnail="recipe.thumbnail"
            :title="recipe.title"
        />
    </section>
</template>

<script>
import Recipe from '@/components/Recipe'
import Header from '@/components/Header'
export default {
    components: {
        Header,
        Recipe
    },
    asyncData() {
        return {
            recipes: [
                {
                    id: "1",
                    title: "Delicious hamburger",
                    previewText: "Awesome hamburger",
                    thumbnail: "https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg"
                },
                {
                    id:"2",
                    title: "Delicious vegetables",
                    previewText: "Awesome vegetables",
                    thumbnail: "https://www.medicalnewstoday.com/content/images/articles/324/324956/close-up-of-a-plate-of-food.jpg"
                }
            ]
        }
    }
};
</script>

<style scoped>
.recipes {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
}

</style>