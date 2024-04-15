class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    post = Post.create(content: params[:content]) #postモデルに一旦保存再利用が可能
    render json:{ post: post }
  end
end
