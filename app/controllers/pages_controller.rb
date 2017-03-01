class PagesController < ApplicationController

  before_action :set_property

  def property
    # @property = Property.friendly.find(friendly_id) unless friendly_id.nil?
  end

  def set_property
    @property = Property.find(params[:id])
    @properties = Property.all
  end

end
