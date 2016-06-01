class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :name

  def name
    object.item.name
  end
end
