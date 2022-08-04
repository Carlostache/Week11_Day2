
class Api::TodosController < ApplicationController

    def index
        todos = Todo.all
        render json: todos
    end

    def show
        render json: Todo.find(params[id])
    end

    def create
        @todo = Todo.new(todo_params)

        if @todo.save
            render json: @todo
        else 
            render json: @todo.errors.full_messsages, status: 422
        end
    end

    def destroy
        @todo = Todo.find(params[id])

        if @todo
            @todo.delete
        else
            return "todo not found"
        end
    end

    def todo_params
        params.require(:todo).permit(:title, :body, :done)
    end
    
end