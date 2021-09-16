class Dater < SiteBuilder
  def build
    helper "cooldate" do |cool|
      cool.strftime("%B %d, %Y")
    end
  end
end
