class CompaniesController < ApplicationController

    def index
        companies = Company.all
        render json: companies, status: :ok
    end

    def show
        company = Company.find(params[:id])
        render json: company, status: :ok
    end

    def create
        company = Company.create(company_params)
        render json: company, status: :created
    end

    private

    def company_params
        params.permit(:name, :companyLink)
    end
end
