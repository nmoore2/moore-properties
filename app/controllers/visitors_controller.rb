class VisitorsController < ApplicationController

  def index
    @properties = Property.all
  end

  def faq
    @properties = Property.all
    @faqs = Faq.all
  end

  def contact
    @properties = Property.all
  end

  def apply
    @properties = Property.all
  end


end
