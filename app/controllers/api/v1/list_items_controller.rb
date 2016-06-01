class Api::V1::ListItemsController < Api::V1::BaseController
  before_action :set_item, only: [:show, :update, :destroy]

  # GET /items
  # GET /items.json
  def index
    @list_items = ListItem.all

    render json: @list_items
  end

  # GET /list_items/1
  # GET /list_items/1.json
  def show
    render json: @list_item
  end

  # POST /list_items
  # POST /list_items.json
  def create
    ListItem.transaction do
      item = Item.new(item_params)
      item.save

      @list_item = ListItem.new(list_item_params)
      @list_item.item_id = item.id
      @list_item.list_id = params[:list_id]


      if @list_item.save
        render json: @list_item, status: :created
      else
        render json: @list_item.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /list_items/1
  # PATCH/PUT /list_items/1.json
  def update
    @list_item = ListItem.find(params[:id])

    if @list_item.update(list_item_params)
      head :no_content
    else
      render json: @list_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /list_items/1
  # DELETE /list_items/1.json
  def destroy
    @list_item.destroy

    head :no_content
  end

  private

    def set_list_item
      @list_item = ListItem.find(params[:id])
    end

    def item_params
      params.require(:list_item).permit(:name)
    end

    def list_item_params
      params.require(:list_item).permit(:item_id, :list_id)
    end
end
