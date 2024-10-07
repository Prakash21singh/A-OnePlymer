import { Card, CardContent } from "@/components/ui/card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function CompanyGlance() {
  return (
    <section className="w-full py-4 md:py-8 bg-gray-100 font-rubik">
      <div className="container mx-auto px-4 md:px-6">
        <TextGenerateEffect
          start={2}
          end={5}
          words="A Glance at Our Company"
          className="text-center px-4  text-wrap text-2xl md:text-3xl lg:text-5xl my-5"
        />
        <Card className="w-full max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0 mx-auto">
            <div className="aspect-video relative mx-auto">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/cn-CPmAoLXk?si=juzDU4nAWXeR9GGL"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
          </CardContent>
        </Card>
        <p className="mt-4 text-base md:text-2xl text-center text-gray-600">
          Experience the energy and innovation that drives our company forward.
        </p>
      </div>
    </section>
  );
}
