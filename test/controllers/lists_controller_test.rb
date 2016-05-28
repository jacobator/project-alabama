require 'test_helper'

class ListsControllerTest < ActionController::TestCase
  setup do
    @list = lists(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:lists)
  end

  test "should create list" do
    assert_difference('List.count') do
      post :create, list: { description: @list.description, name: @list.name }
    end

    assert_response 201
  end

  test "should show list" do
    get :show, id: @list
    assert_response :success
  end

  test "should update list" do
    put :update, id: @list, list: { description: @list.description, name: @list.name }
    assert_response 204
  end

  test "should destroy list" do
    assert_difference('List.count', -1) do
      delete :destroy, id: @list
    end

    assert_response 204
  end
end
