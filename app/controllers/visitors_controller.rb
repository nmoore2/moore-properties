class VisitorsController < ApplicationController
  before_action :set_property

  def index
    @availability = false
    @properties.each do |property|
      if property.available
        @availability = true
      end
    end
  end

  def faq
    @faqs = Faq.all
  end

  def contact
  end

  def apply
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_property
    @properties = Property.all
  end

end
