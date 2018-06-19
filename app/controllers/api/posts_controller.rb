class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: Post.all
  end

  def show
    render json: @post
  end

  def create
    post = Post.new(post_params)

    if post.saverender json: post
      render json: post
    else
      render json: { errors: @post.errors.full_messages.join(', ') }, status: :bad_request
    end
  end

  def update
    if @post.update(post_params)
      render json: @post 
    else 
      render :json{ errors: @post.errors.full_messages.join(', ') }, status: :bad_request
    end
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = Post.find(psrams[:id]) 
  end

  def post_params
    params.require(:post).permit(:author, :body)
  end
  
end