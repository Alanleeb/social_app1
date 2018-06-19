15.times do 
    Post.create(
        author: Faker::BackToTheFuture.character,
        body: Faker::ChuckNorris.fact
    )
end
