class VisitorsController < ApplicationController

  def index
    @properties = Property.all
  end

  def faq
    @properties = Property.all
    @page = Page.find_by title: 'FAQ'
  end

end
