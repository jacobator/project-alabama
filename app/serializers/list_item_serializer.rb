class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :completed

  def name
    object.item.name
  end
end
