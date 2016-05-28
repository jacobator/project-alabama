class Api::V1::BaseController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def record_not_found(exception)
    klass_name = exception.message.split(' ')[2].underscore.to_sym
    render json: { errors: { klass_name => ['not found'] } }, status: :not_found
  end
end
