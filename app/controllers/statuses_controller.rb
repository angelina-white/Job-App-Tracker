class StatusesController < ApplicationController

    def index
        statuses = Status.all
        render json: statuses, status: :ok
    end

    def show
        status = Status.find(params[:id])
        render json: status, status: :ok
    end

end
